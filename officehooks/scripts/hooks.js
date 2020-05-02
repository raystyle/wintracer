var loadedModules = {}
var resolvedAddresses = {}

function resolveName(dllName, name) {
    var moduleName = dllName.split('.')[0]
    var functionName = moduleName + "!" + name

    if (functionName in resolvedAddresses) {
        return resolvedAddresses[functionName]
    }

    console.log("resolveName " + functionName);
    console.log("Module.findExportByName " + dllName + " " + name);
    var addr = Module.findExportByName(dllName, name)

    if (!addr || addr.isNull()) {
        if (!(dllName in loadedModules)) {
            console.log(" DebugSymbol.loadModule " + dllName);
            var loadModuleResult = DebugSymbol.loadModule(dllName)
            console.log(" DebugSymbol.loadModule finished: " + loadModuleResult);
            loadedModules[dllName] = 1
        }

        try {
            console.log(" DebugSymbol.getFunctionByName: " + functionName);
            addr = DebugSymbol.getFunctionByName(name)
            console.log(" DebugSymbol.getFunctionByName: addr = " + addr);
        }
        catch(err) {
            console.log(" DebugSymbol.getFunctionByName: Exception")
        }
    }

    resolvedAddresses[functionName] = addr
    return addr
}

var hookedFunctions = {}

function hookFunction(dllName, name, callback) {
    var functionName = dllName + "!" + name
    if (functionName in hookedFunctions) {
        return
    }

    hookedFunctions[functionName] = 1
    
    var addr = resolveName(dllName, name)
    if (!addr || addr.isNull()) {
        return
    }

    console.log('Interceptor.attach: ' + functionName + '@' + addr);
    Interceptor.attach(addr, callback)
}

function loadDLLHooks(dllName) {
    if (dllName in hookMap) {

        try {
            if (Module.getBaseAddress(dllName).isNull()) {
                return
            }
        }
        catch(err)
        {
            return
        }

        // console.log("loadDLLHooks dllName: " + dllName)
        var calls = hookMap[dllName]
        for(var i = 0 ; i < calls.length; i++) {
            // console.log("  calls[" + i + "]: " + calls[i])
            calls[i](dllName)
        }
    }
}

function hookLoadLibraryA(moduleName) {
    hookFunction(moduleName, "LoadLibraryA", {
        onEnter: function (args) {
            this.targetDLLName = ptr(args[0]).readCString()
            console.log("[+] LoadLibraryA: " + this.targetDLLName)
        },
        onLeave: function (retval) {
            loadDLLHooks(this.targetDLLName)               
        }
    })
}

function hookLoadLibraryExA(moduleName) {
    hookFunction(moduleName, "LoadLibraryExA", {
        onEnter: function (args) {
            this.targetDLLName = ptr(args[0]).readCString()
            console.log("[+] LoadLibraryExA: " + this.targetDLLName)
        },
        onLeave: function (retval) {
            loadDLLHooks(this.targetDLLName)               
        }
    })
}

function hookLoadLibraryW(moduleName) {
    hookFunction(moduleName, "LoadLibraryW", {
        onEnter: function (args) {
            this.targetDLLName = ptr(args[0]).readUtf16String()
            console.log("[+] LoadLibraryW: " + this.targetDLLName)            
        },
        onLeave: function (retval) {
            loadDLLHooks(this.targetDLLName)               
        }
    })
}

function hookLoadLibraryExW(moduleName) {
    hookFunction(moduleName, "LoadLibraryExW", {
        onEnter: function (args) {
            this.targetDLLName = ptr(args[0]).readUtf16String()
            console.log("[+] LoadLibraryExW: " + this.targetDLLName)            
        },
        onLeave: function (retval) {
            loadDLLHooks(this.targetDLLName)               
        }
    })
}