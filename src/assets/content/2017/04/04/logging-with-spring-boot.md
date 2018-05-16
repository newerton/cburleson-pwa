Logging with Spring Boot is dead simple. Everything's pretty much setup and ready to go. In this post, I provide some quick and simple tips to get your Spring Boot logs rolling.

## About Logging Dependencies

If you use the ‘Starters’, Logback will be used with appropriate routing included to ensure that dependent libraries that use Java Util Logging, Commons Logging, Log4J or SLF4J will all work correctly. Let's suppose, for example, that you're using the web starter in your Maven `pom.xml` file, as shown below.

``` xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Generally you won’t need to change any logging dependencies and the Spring Boot defaults will work just fine. That is to say, you don't need to add any additional dependencies to the POM for logging. You can verify this by printing a tree representation of your project dependencies. On the command line, change to your project directory and executing the following command.

`mvn dependency:tree`

Notice that the Spring Boot starter already includes dependencies for logging...

``` bash
[INFO] +- org.springframework.boot:spring-boot-starter-web:jar:1.5.2.RELEASE:compile
[INFO] |  +- org.springframework.boot:spring-boot-starter:jar:1.5.2.RELEASE:compile
[INFO] |  |  +- org.springframework.boot:spring-boot-starter-logging:jar:1.5.2.RELEASE:compile
[INFO] |  |  |  +- ch.qos.logback:logback-classic:jar:1.1.11:compile
[INFO] |  |  |  |  \- ch.qos.logback:logback-core:jar:1.1.11:compile
[INFO] |  |  |  +- org.slf4j:jcl-over-slf4j:jar:1.7.24:compile
[INFO] |  |  |  +- org.slf4j:jul-to-slf4j:jar:1.7.24:compile
[INFO] |  |  |  \- org.slf4j:log4j-over-slf4j:jar:1.7.24:compile
```

## Configure Log Levels

The easiest way to configure logging levels is in the `application.properties` file. If you don't already have one, create an `application.properties` file in the root of the `resources/` folder. Then, simply prefix Java packages and classes with logging.level as shown below. Notice that you can configure the root logger at a specific level first, then get more specific with other loggers.

**application.properties**

``` .properties
logging.level.root=INFO
logging.level.com.cburleson.rdfx=TRACE
```

## Put Logging Code in Your Classes

Now, we can use SLF4J for logging. Here's how.

Add the following to the imports section of your java code:


``` java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
```

Add the following at the top of your class in the global section (just under the line that declares your class public class Whatever extends Whatever). Change the name of the class (MyClassName) in the `getLogger` method call, of course. Name it the same as the class you're dropping this code into.

``` java
static final Logger LOG = LoggerFactory.getLogger(MyClassName.class);
```

To test quickly, you can throw some logging statements in your code somewhere where you know they'll be fired right away when you run your app. For example:

``` java
LOG.trace("Hello World!");
LOG.debug("How are you today?");
LOG.info("I am fine.");
LOG.warn("I love programming.");
LOG.error("I am programming.");
```

The default log configuration will echo messages to the console as they are written. If your terminal supports ANSI, color output will be used to aid readability.

## Log to a File

If you want to write log files in addition to the console, you can set a `logging.file` or `logging.path` property in your application.properties. For example...

``` .properties
logging.level.root=INFO
logging.level.com.cburleson.rdfx=TRACE
 
#output to a temp_folder/file
logging.file=${java.io.tmpdir}/myapp.log
 
#output to a file
#logging.file=/Users/cburleson/myapp.log
 
 
#output to a file called spring.log in the specified path
#logging.path=/var/log
```

## Using SLF4J over Log4j

Now, if you want to use SLF4 over Log4j 2, and a log4j configuration file, the setup is a little different. In your Maven, POM, you must exclude spring-boot-starter-logging and then add a dependency for spring-boot-starter-log4j2 as shown below.


``` xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
 
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```

Then you need to have a log4j2.xml file on the classpath; for example - in `src/main/resources`. Here's a simple log4j2.xml file example.

**log4j2.xml**

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="INFO">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n" />
        </Console>
        <File name="MyFile" fileName="all.log" immediateFlush="false" append="false">
            <PatternLayout pattern="%d{yyy-MM-dd HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
        </File>
    </Appenders>
    <Loggers>
        <Root level="debug">
            <AppenderRef ref="Console" />
            <!-- AppenderRef ref="MyFile"/ -->
        </Root>
 
        <Logger name="com.base22" level="trace" additivity="false">
            <AppenderRef ref="Console"/>
        </Logger>
 
    </Loggers>
</Configuration>
```

## Conclusion

As you can see, logging from your Spring Boot application is piece of cake. Of course, there's a lot more that you can do as your requirements dictate. For more information, take a look at [Logging, in the Spring Boot Reference Guide](http://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/reference/htmlsingle/#boot-features-logging).
