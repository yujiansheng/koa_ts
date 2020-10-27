## koa && TypeScript Create NodeJS API

使用 Koa 2，TypeScript 和 Redis 创建 RESTful / JSON API。并以（部分）测试驱动的开发（TDD）方式工作

### 包括

1. 创建了一个新的 Koa 项目
2. 添加了 TypeScript，第三方键入并创建了自己的类型定义
3. 设置 Jest，并为所有 API 端点创建测试
4. 使用 Redis（通过 Docker）作为插件存储解决方案
5. 创建路线手柄 GET，POST 和 DELETE 请求
6. 添加了对传入数据的验证逻辑

> Jest 是一个出色的 JavaScript 测试框架，对于后端和前端项目同样适用。这将有助于确保我们的 API 端点行为正常，并允许我们在测试时轻松地模拟我们的存储引擎（Redis）
> Redis 是一个内存中的数据存储，我们将其用作非常轻量级的数据库。您可以将其切换到 SQL 数据库（例如 Postgres），但是 Redis 的列表将很好地满足我们的目的。我们将使用 Docker 来运行 Redis（尽管您可以按照自己喜欢的方式运行它），以使事情变得更容易
