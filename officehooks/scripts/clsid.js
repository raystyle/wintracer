var clsidNameMap = {
    // Package Object
    "{F20DA720-C02F-11CE-927B-0800095AE340}": "OLE Package Object",
    "{00020C01-0000-0000-C000-000000000046}": "OLE Package Object",
    "{00022601-0000-0000-C000-000000000046}": "OLE Package Object",
    "{00022602-0000-0000-C000-000000000046}": "OLE Package Object",
    "{00022603-0000-0000-C000-000000000046}": "OLE Package Object",
    "{0003000C-0000-0000-C000-000000000046}": "OLE Package Object",
    "{0003000D-0000-0000-C000-000000000046}": "OLE Package Object",
    "{0003000E-0000-0000-C000-000000000046}": "OLE Package Object",

    // Equation Object
    "{00021700-0000-0000-C000-000000000046}": "Microsoft Equation 2.0 (Known Related to CVE-2017-11882 or CVE-2018-0802)",
    "{0002CE02-0000-0000-C000-000000000046}": "Microsoft Equation 3.0 (Known Related to CVE-2017-11882 or CVE-2018-0802)",
    "{0002CE03-0000-0000-C000-000000000046}": "MathType Equation Object",

    "{00020900-0000-0000-C000-000000000046}": "Word.Document.6",
    "{00020906-0000-0000-C000-000000000046}": "Word.Document.8",
    "{F4754C9B-64F5-4B40-8AF4-679732AC0607}": "Word.Document.12",
    "{00020810-0000-0000-C000-000000000046}": "Excel.Sheet.5",
    "{00020811-0000-0000-C000-000000000046}": "Excel.Chart.5",
    "{00020820-0000-0000-C000-000000000046}": "Excel.Sheet.8",
    "{00020821-0000-0000-C000-000000000046}": "Excel.Chart.8",
    "{00020830-0000-0000-C000-000000000046}": "Excel.Sheet.12",
    "{00020832-0000-0000-C000-000000000046}": "Excel.SheetMacroEnabled.12",
    "{00020833-0000-0000-C000-000000000046}": "Excel.SheetBinaryMacroEnabled.12",
    "{64818D10-4F9B-11CF-86EA-00AA00B929E8}": "Powerpoint.Show.8",
    "{64818D11-4F9B-11CF-86EA-00AA00B929E8}": "Powerpoint.Slide.8",
    "{CF4F55F4-8F87-4D47-80BB-5808164BB3F8}": "Powerpoint.Show.12",
    "{048EB43E-2059-422F-95E0-557DA96038AF}": "Powerpoint.Slide.12",

    "{00000300-0000-0000-C000-000000000046}": "StdOleLink (Known Related to CVE-2017-0199, CVE-2017-8570 or CVE-2017-8759)",
    "{00000535-0000-0010-8000-00AA006D2EA4}": "ADODB.RecordSet (Known Related to CVE-2015-0097)",
    "{05741520-C4EB-440A-AC3F-9643BBC9F847}": "otkloadr.WRLoader (Known Related to CVE-2015-1641)",
    "{0CF774D0-F077-11D1-B1BC-00C04F86C324}": "HTML.HostEncode",
    "{0D43FE01-F093-11CF-8940-00A0C9054228}": "Scripting.FileSystemObject",
    "{0E59F1D5-1FBE-11D0-8FF2-00A0D10038BC}": "MSScriptControl.ScriptControl  (Known Related to CVE-2015-0097)",
    "{1461A561-24E8-4BA3-8D4A-FFEEF980556B}": "BCSAddin.Connect (Known Related to CVE-2016-0042)",
    "{14CE31DC-ABC2-484C-B061-CF3416AED8FF}": "Loads WUAEXT.DLL (Known Related to CVE-2015-6128)",
    "{1D8A9B47-3A28-4CE2-8A4B-BD34E45BCEEB}": "UPnP.DescriptionDocument",
    "{1EFB6596-857C-11D1-B16A-00C0F0283628}": "MSCOMCTL.TabStrip (Known Related to CVE-2012-1856 & CVE-2013-3906)",
    "{23CE100B-1390-49D6-BA00-F17D3AEE149C}": "UmOutlookAddin.UmEvmCtrl (Known Related to CVE-2016-0042)",
    "{33BD73C2-7BB4-48F4-8DBC-82B8B313AE16}": "osf.SandboxManager (Known Related To CVE-2015-1770)",
    "{33FD0563-D81A-4393-83CC-0195B1DA2F91}": "UPnP.DescriptionDocumentEx",
    "{394C052E-B830-11D0-9A86-00C04FD8DBF7}": "Loads ELSEXT.DLL (Known Related to CVE-2015-6128)",
    "{3BA59FA5-41BF-4820-98E4-04645A806698}": "osf.SandboxContent (Known Related To CVE-2015-1770)",
    "{41B9BE05-B3AF-460C-BF0B-2CDD44A093B1}": "Search.XmlContentFilter",
    "{4315D437-5B8C-11D0-BD3B-00A0C911CE86}": "Device Moniker (Known Related to CVE-2016-0015)",
    "{4C599241-6926-101B-9992-00000B65C6F9}": "Forms.Image (Known Related to CVE-2015-2424)",
    "{44F9A03B-A3EC-4F3B-9364-08E0007F21DF}": "Control.TaskSymbol (Known Related to CVE-2015-1642 & CVE-2015-2424)",
    "{46E31370-3F7A-11CE-BED6-00AA00611080}": "Forms.MultiPage",
    "{4D3263E4-CAB7-11D2-802A-0080C703929C}": "AutoCAD 2000-2002 Document",
    "{5E4405B0-5374-11CE-8E71-0020AF04B1D7}": "AutoCAD R14 Document",
    "{6A221957-2D85-42A7-8E19-BE33950D1DEB}": "AutoCAD 2013 Document",
    "{6AD4AE40-2FF1-4D88-B27A-F76FC7B40440}": "BCSAddin.ManageSolutionHelper (Known Related to CVE-2016-0042)",
    "{6E182020-F460-11CE-9BCD-00AA00608E01}": "Forms.Frame",
    "{66833FE6-8583-11D1-B16A-00C0F0283628}": "MSCOMCTL.Toolbar (Known Related to CVE-2012-0158 & CVE-2012-1856)",
    "{799ED9EA-FB5E-11D1-B7D6-00C04FC2AAE2}": "Microsoft.VbaAddin (Known Related to CVE-2016-0042)",
    "{79EAC9D0-BAF9-11CE-8C82-00AA004BA90B}": "StdHlink",
    "{79EAC9D1-BAF9-11CE-8C82-00AA004BA90B}": "StdHlinkBrowseContext",
    "{79EAC9E2-BAF9-11CE-8C82-00AA004BA90B}": "(http:) Asychronous Pluggable Protocol Handler",
    "{79EAC9E3-BAF9-11CE-8C82-00AA004BA90B}": "(ftp:) Asychronous Pluggable Protocol Handler",
    "{79EAC9E5-BAF9-11CE-8C82-00AA004BA90B}": "(https:) Asychronous Pluggable Protocol Handler",
    "{79EAC9E6-BAF9-11CE-8C82-00AA004BA90B}": "(mk:) Asychronous Pluggable Protocol Handler",
    "{79EAC9E7-BAF9-11CE-8C82-00AA004BA90B}": "(file:, local:) Asychronous Pluggable Protocol Handler",
    "{7AABBB95-79BE-4C0F-8024-EB6AF271231C}": "AutoCAD 2007-2009 Document",
    "{85131630-480C-11D2-B1F9-00C04F86C324}": "JSFile.HostEncode",
    "{85131631-480C-11D2-B1F9-00C04F86C324}": "VBSFile.HostEncode",
    "{8627E73B-B5AA-4643-A3B0-570EDA17E3E7}": "UmOutlookAddin.ButtonBar (Known Related to CVE-2016-0042)",
    "{8E75D913-3D21-11D2-85C4-080009A0C626}": "AutoCAD 2004-2006 Document",
    "{975797FC-4E2A-11D0-B702-00C04FD8DBF7}": "Loads ELSEXT.DLL (Known Related to CVE-2015-6128)",
    "{A08A033D-1A75-4AB6-A166-EAD02F547959}": "otkloadr.WRAssembly  (Known Related to CVE-2015-1641)",
    "{B54F3741-5B07-11CF-A4B0-00AA004A55E8}": "VBS, VBScript",
    "{BDD1F04B-858B-11D1-B16A-00C0F0283628}": "MSCOMCTL.ListViewCtrl (Known Related to CVE-2012-0158)",
    "{C08AFD90-F2A1-11D1-8455-00A0C91F3880}": "ShellBrowserWindow",
    "{C62A69F0-16DC-11CE-9E98-00AA00574A4F}": "Forms.Form",
    "{C74190B6-8589-11D1-B16A-00C0F0283628}": "MSCOMCTL.TreeCtrl (Known Related to CVE-2012-0158)",
    "{CCD068CD-1260-4AEA-B040-A87974EB3AEF}": "UmOutlookAddin.RoomsCTP (Known Related to CVE-2016-0042)",
    "{CDDBCC7C-BE18-4A58-9CBF-D62A012272CE}": "osf.Sandbox (Known Related To CVE-2015-1770)",
    "{CDF1C8AA-2D25-43C7-8AFE-01F73A3C66DA}": "UmOutlookAddin.InspectorContext (Known Related to CVE-2016-0042)",
    "{D27CDB6E-AE6D-11CF-96B8-444553540000}": "Shockwave Flash Object",
    "{D50FED35-0A08-4B17-B3E0-A8DD0EDE375D}": "UmOutlookAddin.PlayOnPhoneDlg (Known Related to CVE-2016-0042)",
    "{D70E31AD-2614-49F2-B0FC-ACA781D81F3E}": "AutoCAD 2010-2012 Document",
    "{D93CE8B5-3BF8-462C-A03F-DED2730078BA}": "Loads WUAEXT.DLL (Known Related to CVE-2015-6128)",
    "{DD9DA666-8594-11D1-B16A-00C0F0283628}": "MSCOMCTL.ImageComboCtrl (Known Related to CVE-2014-1761)",
    "{E5CA59F5-57C4-4DD8-9BD6-1DEEEDD27AF4}": "InkEd.InkEdit",
    "{E8CC4CBF-FDFF-11D0-B865-00A0C9081C1D}": "Loads OCI.DLL (Known Related to CVE-2015-6128)",
    "{ECABAFC9-7F19-11D2-978E-0000F8757E2A}": "Loads MQRT.DLL (Known Related to CVE-2015-6128)",
    "{ECF44975-786E-462F-B02A-CBCCB1A2C4A2}": "UmOutlookAddin.FormRegionContext (Known Related to CVE-2016-0042)",
    "{F414C260-6AC0-11CF-B6D1-00AA00BBBB58}": "ECMAScript, JavaScript, JScript, LiveScript",
    "{F959DBBB-3867-41F2-8E5F-3B8BEFAA81B3}": "UmOutlookAddin.FormRegionAddin (Known Related to CVE-2016-0042)",
}