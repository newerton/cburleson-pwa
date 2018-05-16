Since the release of IBM WebSphere Portal 7, there have been a number of Portal EL beans exposed for access in your theme. EL beans are Java objects that can be used with the JSTL Expression Language. One of these objects, the UserBean, provides convenient access to the defined user attributes of the authenticated user.

In the default Portal 8.0 and CTC 3.1 theme, for example, you can find the following JSTL statement, which is used to print the authenticated user’s name in the theme header. The snippet is in `/themes/html/dynamicSpots/commonActions.jsp` and it looks like this:

``` xml
<c:out value="${wp.user[themeConfig['user.displaynameattribute']]}" />
```

The JSTL c:out tag in the line above is actually using two EL beans together. The ThemeConfigBean is providing access to theme metadata, the value of which is being passed as a parmeter to the UserBean. To clarify, we could simplify that line to go after the user’s surname, which is defined by LDAP convention as ‘sn’.

``` xml
<c:out value="${wp.user['sn']}" />
```

You have to be careful though; I learned that you cannot expect a String to be returned in all cases. Take this for example:

``` xml
<c:out value="${wp.user['givenName']}" /> 
``

That printed the username with square brackets surrounding it (e.g. [Cody]) and it took me a bit to understand why. As it turns out, givenName was a multi-valued attribute, so what was actually being returned was an ArrayList. Once I knew that, it was easy enough to solve the problem with the following stanza:

``` xml
<%-- givenName is an ArrayList --%>
<c:set var="gName" value="${wp.user['givenName']}"/>
<c:if test="${gName ne null}">
    <c:set var="givenName" value="${gName[0]}"/>
</c:if>
<c:choose>
    <c:when test="${givenName eq null || givenName eq ''}">
        <a href="<%wpsURL.write(escapeXmlWriter);%>"><c:out value="${wp.user[themeConfig['user.displaynameattribute']]}" /></a>
    </c:when>
    <c:otherwise>
        <a href="<%wpsURL.write(escapeXmlWriter);>"><c:out value="${givenName}" />&amp;nbsp;<c:out value="${wp.user['sn']}" /></a>
    </c:otherwise>
</c:choose>
```

In the code above, I’m checking to see if the user has a givenName defined and if so, I’m printing it by accessing the first String in the ArrayList ( i.e. `${gName[0]}` ). I put the result of that expression into a variable called givenName and then use it later as `${givenName}` in a `c:out` tag.

Now, you may be familiar with printing defined user attribute values in your theme using the `portal-fmt` tag like this:

``` xml
<portal-fmt:user attribute="givenName"/>
```

I don’t have any reason to believe that one approach is better than the other, but it’s an alternative that you might find useful in some scenarios. Also, just being aware of these EL beans that are accessible from theme code is good. Perhaps the next time you see one, it will be a little more familiar to you now.

See: [Portal EL Beans](http://www-10.lotus.com/ldd/portalwiki.nsf/dx/Portal_EL_Beans) in the WebSphere Portal Family wiki for a list of all the EL beans.

