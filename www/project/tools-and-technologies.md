# The vegan detector

## Tools and Technologies

### Application front-end 

The application would be available for iOS and Android. For iOS, Swift programming language would be used. Swift allows for development of the app with outputs being able to be viewed real time. Swift code would then also work for iPadOS, which would allow the app to be available for iPhones & iPads (The Swift Programming Language 2022). 

For Android users, the application would also need to be created in Kotlin or Java, where Kotlin is the recommended for building Android apps. Kotlin also allows concepts, features or designs to be previewed in close to real time, allowing developers to preview and exercise the bug-squashing fingers (Kotlin and Android n.d). To simplify the application development further, the nature of the app (cloud-based) allows cross-platform application UI frameworks such as React-Native, NativeScript, Flutter or Cordova to allow the app to be implemented generically, and cross-compile to various platforms (including, but not limited to mobile and web). 

### Application back-end 

The application interfaces with the back-end over REST or GraphQL APIs to fetch, manage and interface with a central database of ingredients, users and other required information.  

The most notable requirements for the application is AI/ML operations which recognise, categorise ingredients, classify them, and assess them. The frameworks to do this include: 

* **TensorFlow**: a library designed for highly efficient tensor (generic term for vectors, matrices and nth-dimensional matrices) operations, designed specifically for Machine-Learning and Artificial-Intelligence tasks. It has the capabilities of utilising all available hardware including GPUs and CPUs to maximise the TOPS (Tensor Operations per Second). 

* **Keras**: is a high-power python AI framework designed for general-purpose neural computation which builds on TensorFlow to provide interfaces for AI applications with smaller datasets.  

* **Torch/PyTorch**: The Torch library is similar to Keras in purpose. It's designed to interface with tensor backends such as TensorFlow to provide uniform APIs to build, create and solve AI problems. The difference is that Torch is designed for huge/massive datasets. A good example is OpenAI's GPT3 which uses a stupendously large library of articles and documents found across the internet in several different languages. NVidia estimates the algorithm's size to over ***175 BILLION parameters***.

The popular frameworks outlined above focus so heavily on optimisations, to bring the resulting interfaces to efficient, hence performant applications that attempting to build/use a custom ML/AI framework would prove infeasible at best to downright impossible.

#### Classification

Classifying ingredients would involve passing a list through a classification system. The system would compare the list against a database of known ingredients, which are either hand-ranked or contributed by the community and stored in a database such as Postgres, MySQL, MongoDB or others. Given the nature of the application, the need for complex relational queries is minimal, hence the need for a capable querying language is eliminated, allowing simple database clients to focus on efficiency. Hence systems like SQLite, MongoDB or a custom engine will hold and manage access to data.  

While it is possible to maintain local copies of the database, this will quickly become a nuisance to end-users, as the database will grow rapidly in size, doesn't synchronise with the master database in real-time and/or potentially leaks sensitive information such as user data or application internals.  

As mentioned, a library of ingredients is stored by name, a brief description, a ranking where 1 indicates a product of animal origin, and 10 the opposite. It is possible for community members to contribute their own opinions on ingredients, where they will be prompted for their input, such as absolutely vegan, absolutely not vegan or questionable. The feedback is collected and reviewed. The result of the revision will be merged with previous feedback to produce an average of the feedback, which will be reported to subsequent users. Ingredients which are considered questionable will be reported as such. The feedback from users will give insight as to why, where it becomes the user's preference.  

Similarly, if an ingredient is not successfully identified, a visual indicator will be used to notify the user, where they may choose to contribute information to the central database. They will be prompted of several pieces of information, such as to pick whether it is a) undeniably vegan, b) undeniably not vegan or c) questionable, a product name, a list of common identifiers, such as keywords, adjectives and common uses. 

[Next](/project/skills.html)