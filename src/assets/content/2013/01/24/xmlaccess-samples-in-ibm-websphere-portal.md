XMLAccess is a command-line utility for exporting and importing various portal configuration settings in an XML format. The utility takes an XML file as input and produces an XML file, which is the results of the input. It’s a very common way of moving configuration settings from one environment to another. On the portal file system, there are number of useful samples, which can be used as-is or a basis for creating your own scripts. Following is a list of the available XMLAccess samples. I wanted to list these on my blog because it’s often more convenient to check them here than on the actual server file system. 

**XMLAccess Samples**

Found in `<PortalServer-root>/doc/xml-samples`.
(list made from samples found in IBM WebSphere Portal version 8)

- ActivatePortlet.xml
- CleanSystemSlots.xml
- CleanupUsers.xml
- ClonePortlet.xml
- CopyPage.xml
- CreateAnalyticsTags.xml
- CreateApplicationFolder.xml
- CreateCsaPage.xml
- CreateFilter.xml
- CreateLanguage.xml
- CreateLegacyPage.xml
- CreatePage.xml
- CreatePageFromTemplate.xml
- CreatePageFromZip.xml
- CreateTagsAndRatings.xml
- CreateTemplateFolder.xml
- CreateUrl.xml
- CreateUser.xml
- CreateWSRPProducer.xml
- DeleteAnalyticsTags.xml
- DeleteFilter.xml
- DeletePage.xml
- DeletePortlet.xml
- DeleteTagsAndRatings.xml
- DeleteUser.xml
- DeployPortlet.xml
- DeployTheme.xml
- DeployThemeFromWebModule.xml
- Export.xml
- ExportAllPolicyNodes.xml
- ExportAllPortlets.xml	ExportAllUsers.xml
- ExportAnalyticsTags.xml
- ExportIncludingOrphanedData.xml
- ExportManagedPagesRelease.xml
- ExportPage.xml
- ExportPageResult.xml
- ExportPortletAndPage.xml
- ExportPortletAndStaticPage.xml
- ExportRelease.xml
- ExportStaticPage.xml
- ExportSubTree.xml
- ExportTagsAndRatings.xml
- ExportTasks.xml
- ExportThemesAndSkins.xml
- ExportUserResource.xml
- ExportWSRPCustomizedPortletInstances.xml
- ExportWSRPProducer.xml
- ExportWSRPProducersAndPortlets.xml
- FederationDeletion.xml
- FederationImport.xml
- IntegrateRemotePortlet.xml
- ModifyPortlet.xml
- MovePage.xml
- RegisterPreDeployedEAR.xml
- Task.xml
- Transaction.xml
- UpdateAccesscontrol.xml
- UpdateFilter.xml
- UpdatePortlet.xml
- UpdateVault.xml

**Example: Export All Themes and Skins**

Following is an example of how one of these scripts might be executed on a UNIX system:

``` bash
/usr/IBM/WebSphere/PortalServer/bin/xmlaccess.sh -user wpsadmin -password <password> -url http://<host>:<port>/wps/config -in /usr/IBM/WebSphere/PortalServer/doc/xml-samples/ExportThemesAndSkins.xml -out /home/<user-home>/ExportThemesAndSkins_result.xml
```

In the command above, you should modify the paths if they differ on your server and you must also replace `<password>`, `<host>`, `<port>`, and `<user-home>` with values appropriate to your own environment.

