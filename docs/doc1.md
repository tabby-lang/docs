---
id: doc1
title: Latin-ish
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.


<!--DOCUSAURUS_CODE_TABS-->
<!--Tabby-->

```go
/* Unlike Go, no need to declare package main/func main().
   main/main() is inferred in files that have neither
   a package declaration, nor a function declaration.
*/
println("Hello, World!")
```

<!--Go-->

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}
```

<!--C++-->

```cpp
#include <iostream>
using namespace std;

int main() 
{
    cout << "Hello, World!";
    return 0;
}
```
<!--END_DOCUSAURUS_CODE_TABS-->
