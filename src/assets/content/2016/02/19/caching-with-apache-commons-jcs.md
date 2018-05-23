With over forty reusable Java components, the Apache Commons project is a gold mine of time-tested and time-saving tools. If you’re a smart developer, you’ve studied the inventory, scanned the API’s, and set a mental flag for each available component. I actually did that once and felt rather proud of myself at the time, but I guess I forgot most of it. Google is still surprising me with interesting stuff from the Commons. Here’s a good one I recently found, for example: Commons JCS™ – a distributed Java caching system.

Need a quick and easy caching system for your web app? Don’t you dare roll your own. And don’t even think about doing some kind of quick and dirty HashMap. Setting up a simple cache with Commons JCS™ is easy – you can have a basic LRU Cache up and running in minutes. What’s more, the package is mature and sophisticated, so you can get into more advanced features when the need arises. But let’s take a look at a simple setup.

First, the Maven dependency…

``` xml
<dependency>
     <groupId>org.apache.commons</groupId>
     <artifactId>commons-jcs-core</artifactId>
     <version>2.0-beta-1</version>
</dependency>
```

Next, create the cache config file as follows. Name it cache.ccf and put it in your resources directory on the classpath. The first stanza is the default cache. The second is one I created, for example, to cache a list of people (active users) from an expensive API call into the cloud.

``` .properties
# DEFAULT CACHE REGION
jcs.default=DC
jcs.default.cacheattributes=org.apache.commons.jcs.engine.CompositeCacheAttributes
jcs.default.cacheattributes.MaxObjects=1000
jcs.default.cacheattributes.MemoryCacheName=org.apache.commons.jcs.engine.memory.lru.LRUMemoryCache
jcs.default.cacheattributes.UseMemoryShrinker=false
jcs.default.cacheattributes.MaxMemoryIdleTime=3600
jcs.default.cacheattributes.ShrinkerInterval=60
jcs.default.elementattributes=org.apache.commons.jcs.engine.ElementAttributes
jcs.default.elementattributes.IsEternal=false
jcs.default.elementattributes.MaxLife=21600
jcs.default.elementattributes.IdleTime=1800
jcs.default.elementattributes.IsSpool=true
jcs.default.elementattributes.IsRemote=true
jcs.default.elementattributes.IsLateral=true
 
# PRE-DEFINED CACHE REGIONS
jcs.region.peopleCache=DC
jcs.region.peopleCache.cacheattributes=org.apache.commons.jcs.engine.CompositeCacheAttributes
jcs.region.peopleCache.cacheattributes.MaxObjects=1000
jcs.region.peopleCache.cacheattributes.MemoryCacheName=org.apache.commons.jcs.engine.memory.lru.LRUMemoryCache
jcs.region.peopleCache.cacheattributes.UseMemoryShrinker=false
jcs.region.peopleCache.cacheattributes.MaxMemoryIdleTime=3600
jcs.region.peopleCache.cacheattributes.ShrinkerInterval=60
jcs.region.peopleCache.cacheattributes.MaxSpoolPerRun=500
jcs.region.peopleCache.elementattributes=org.apache.commons.jcs.engine.ElementAttributes
jcs.region.peopleCache.elementattributes.IsEternal=false
```

You’ll need the following imports…

``` java
import org.apache.commons.jcs.JCS;
import org.apache.commons.jcs.access.exception.CacheException;
import org.apache.commons.jcs.access.CacheAccess;
```

Get a handle on the cache by name like this…

``` java
// String is the cache key, the second param is whatever object type you're caching...
private CacheAccess<String, List<User>> cache = null;
 
public MyService() {
 
     try
     {
          cache = JCS.getInstance( "peopleCache" );
     }
     catch ( CacheException e )
     {
            LOG.error( String.format( "Problem initializing cache: %s", e.getMessage() ) );
     }
 
}
```

Finally, here’s an example of a fetch method that attempts to get resources from the cache before going back to the expensive API client request.

``` java
public List getActiveUsers() {
 
     // First, try to get the user list from the cache...
     List userList = cache.get("activeUserList");
 
     // If the userList does not exist in the cache, build it
     // from the repository request and stick it in the cache.
     if(userList == null) {
 
            UserCollection users = client.getUsers();
            userList = new ArrayList();
 
            for (User user : users)
            {
                if(user.isActive()) {
                    userList.add(user);
                }
            }
 
            cache.put("activeUserList",userList);
 
        }
 
        return userList;
 
}
```

That’s all you need to do to setup a cache in your web app fast. But if you’re wondering if Commons JCS™ has the chops to handle something more sophisticated, here’s something to ease your concerns. Beyond simply caching objects in memory, it provides numerous additional features:

- Memory management
- Disk overflow (and defragmentation)
- Thread pool controls
- Element grouping
- Minimal dependencies
- Quick nested categorical removal
- Data expiration (idle time and max life)
- Extensible framework
- Fully configurable runtime parameters
- Region data separation and configuration
- Fine grained element configuration options
- Remote synchronization
- Remote store recovery
- Non-blocking "zombie" (balking facade) pattern
- Lateral distribution of elements via HTTP, TCP, or UDP
- UDP Discovery of other caches
- Element event handling
- Remote server chaining (or clustering) and failover
- Custom event logging hooks
- Custom event queue injection
- Custom object serializer injection
- Key pattern matching retrieval
- Network efficient multi-key retrieval

Before integrating Commons JCS™, be sure to check out possible cache features available on whatever platform you’re building for. For example, you might instead use the built-in DynaCache for IBM WebSphere or the IBM Data Cache for Bluemix. If nothing is already available on your platform, Commons JCS™ can be the way to go.

