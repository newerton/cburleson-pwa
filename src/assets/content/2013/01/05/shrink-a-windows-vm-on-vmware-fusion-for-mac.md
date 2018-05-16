Here’s my procedure for shrinking a Windows virtual machine on VMWare Fusion for the Mac. 
I should give credit to “Mmc” who posted the original procedure back in March 2008, 
which continues to dominate in Google search results. That procedure is out of date, however, so I reckon it’s time for an update.

1. Make a backup of the VM (just to be on the safe side).
2. Remove any snapshots; you can’t reclaim disk space on a VM that has them.
3. From within the Windows VM, clean up files and defrag the hard drive (Run Disk Cleanup, delete unused files, uninstall anything you don’t need, empty the recycle bin, delete the browser caches, etc., etc. Then defragment the hard-drive inside the Windows VM.)
4. Zap the unused disk space
5. Download SDelete into the Windows VM. I like to put sdelete.exe directly in C: (root) on all my VMs so that I know it’s always there in that convenient spot when it’s time to compress the VM again.
6. In a command prompt, execute “sdelete -z c:” to zap all the free disk space on the C drive
7. Shut down the Windows VM and quit VMWare Fusion.
8. Go to Window > Virtual Machines Library, select the VM and then click the icon to Refresh Disk Space (as shown below)…

![Refresh disk space](/assets/content/2013/01/05/refresh-disk-space.png "Refresh disk space")

9. Finally, go to Virtual Machines > Settings… > General and click the Clean Up Virtual Machine button to reclaim disk space (shown below)…

![Reclaim space](/assets/content/2013/01/05/vmware-recliam-space.png "Reclaim space")

