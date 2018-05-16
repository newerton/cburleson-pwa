Today, I had to install the Java plugin for 64bit Firefox on CentOS 6.4. The procedure wasn’t too bad, but it wasn’t exactly straight-forward either. So, I’m recording what worked for when I have to do it again. Hopefully, you might find it useful too. This is not a descriptive tutorial; it’s just quick notes, so you may have to do a little reading between the lines.

Java must be installed on the system first. This procedure only works with the version you download from Oracle; it will not work with the OpenJDK version of Java you’ll have when using the ‘yum install java’ command.

Download Linux x64 RPM from Oracle’s Java Downloads for All Operating Systems page.

Close Firefox.

Change to root user and enter password.

``` bash
su
```

Change directory to `/usr/java`. If it isn’t created, create it.

``` bash
mkdir /usr/java
cd /usr/java
```

Execute rpm on the Java RPM you just downloaded…

``` bash
rpm -ivh /home/basejump/Downloads/jre-7u21-linux-x64.rpm
```

Validate with:

``` bash
java -version
```

Delete the original RPM; you don’t need that anymore.

``` bash
rm -rf /home/basejump/Downloads/jre-7u21-linux-x64.rpm
```

From the `/usr/java` directory, Find the Firefox plugin (which gets installed with java):

``` bash
find . | grep libnpjp
```

For me, that returned:

``` bash
/usr/java/jre1.7.0_21/lib/amd64/libnpjp2.so
```

Change to directory for Firefox plugins:

``` bash
cd /usr/lib64/mozilla/plugins
```

Be careful. There is also a `/usr/lib/mozilla/plugins` directory. Be sure you’re in lib64!

Create symbolic link to the plugin:

``` bash
ln -fs /usr/java/jre1.7.0_21/lib/amd64/libnpjp2.so libnpjp2.so
```

Exit the root user:

``` bash
exit
```
Start Firefox and validate by going to Tools > Addons > Plugins. You should now see Java Plug-in 1.x.x enabled.
