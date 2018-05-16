I’ve always felt stupid for writing a simple Spring controller just to return a view when no controller logic is required. Turns out, I was right; there is a better way. So, okay. I was stupid, but now I know and here it is.


Since Spring 3.0, you can use the following tag in your XML configuration:

``` xml
<mvc:view-controller path="/" view-name="home"/>
```

That’s an example of a view-controller definition that forwards to a home page without any custom backing controller. The Spring 3.0 documentation describes the tag as follows:

> This tag is a shorcut for defining a ParameterizableViewController that immediately forwards to a view when invoked. Use it in static cases when there is no Java Controller logic to execute before the view generates the response.

Following is an example of the full `dispatcher-servlet.xml` file that I’m using at the moment. You can see at the very bottom that I’ve mapped two of these. The path `/index` routes to a FreeMarker view I’ve defined in an `index.ftl` file and the path `/about` routes to another FreeMarker view defined in the file, `about.ftl`.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p" xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation=" http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.0.xsd http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd">
 
 
        <!-- This must remain in place even if there are no uses of the properties loaded in this file because it prepares the properties for use in Java classes. For example: @Value("${ldp.installableDataPath}") private String installableDataPath; -->
        <context:property-placeholder location="classpath:/config.properties" />
 
 
        <!-- Spring will search in the bellow paths controller an services annotations -->
        <context:component-scan base-package="com.base22" />
 
        <!-- The URL mapping definition -->
        <bean class="org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping" />
 
        <bean class="org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter"/>
 
        <!-- freemarker config -->
        <bean id="freemarkerConfig" class="org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer">
                <property name="templateLoaderPath" value="/WEB-INF/ftl/" />
        </bean>
 
        <!-- View resolvers can also be configured with ResourceBundles or XML files. If you need different view resolving based on Locale, you have to use the resource bundle resolver. -->
        <bean id="viewResolver" class="org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver">
                <property name="cache" value="true" />
                <property name="prefix" value="" />
                <property name="suffix" value=".ftl" />
        </bean>
 
        <!-- The following tags are shorcuts for defining a ParameterizableViewController that immediately forwards to a view when invoked. They are used in static cases when there is no Java Controller logic to execute before the view generates the response. -->
        <mvc:view-controller path="/index" view-name="index" />
        <mvc:view-controller path="/about" view-name="about" />
 
</beans>
```

If you prefer Java code configuration over XML files for Spring, you can do this:

``` java
@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {
 
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("home");
  }
 
}
```

