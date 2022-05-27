# Scanner Technology

Jacob was tasked with putting together a basic prototype of the scanning feature. Given that we knew roughly how we wanted the app to function, it was possible to formulate a prototype of some simplified approaches to demonstrate the technologies available. This is exactly what we did. Using a pretrained Tensorflow model, we were able to open a camera stream which could be fed into a wrapper class provided by yet another library called Quagga.js to interact with the Tensorflow model and return a parsed and formatted identifier which can be used to query the database. A simple demonstration is available on the project website Previous tests of using the Tensorflow library are available on the website as well, such as an image classifier which can recognise, outline and label different objects with a fairly decent accuracy. 

## Optical Character Recognition

Optical Character Recognition (OCR) is a technology which processes input images or video streams and converts them into a list of characters which are present in the input as closely as possible. In almost all cases, the text is used as a preprocessing step for a further set of convolutions or processing. This is also true for our application, as the ingredients would need to be [parsed](), such that the list of ingredients can be looked up individually, rather than as a single unit of text. 

OCR technology uses Recurrent Neural Networks to produce a string of unicode (or other encodings, but unicode is by far the most common) characters from an input image. Such AI/ML tasks require specialised network structures such as RNNs as they produce streams of outputs, rather than a single classification (although this model does exist, it's far less efficient) 

Apple has recently introduced very powerful OCR technology into their camera app on the iPhone and other devices. The technology is able to recognise small, blurry or handwritten letters and allows users to copy the text as though it were actual text. Evidently then, the technology is there, and is performant enough to use on a smartphone, however accounting for the vast array of different circumstances products may list their ingredients in difficult situations (such as on curved or not-solid containers, images may be poor quality, poorly lit, different fonts and styles etc), making the task infeasible. Due to its many limitations from a technical perspective, we chose to use a barcode scanning system instead. This allowed us use technology designed from the ground up to deal with tasks such as lighting or poor container quality to reliably and accurately scan a barcode and look up values in a database. 

# Barcode Formats

For text based recognition, the use of OCR software would be required. Some of available options available in the market include Microsoft Lens, Adobe Scanner, Google Lens, Iscanner. Though all of these provide basic functionality to scan various fonts, their ‘free use’ options are limited and aren’t employable for our usage. Accessing their full feature lists would require paid subscription. 

Beyond these ‘all round’ OCR software is more specialised and customised software such as the Vuforia engine, the technology behind one of the top Wine Recommendation Apps, Vivino. The app is able to scan a label, and output data such as price, description, suppliers. This would be ideal for ‘Do the Vegan Things’ label scanner feature, however it would require substantial monetary input to acquire. 

# Barcodes

The barcode scanner is the most basic, and readily available technology that’s been around for decades. The barcode technology has continued to advance over the years and is now found in various forms which is heavily favoured by different industries. 

For our purpose we’ll be primarily focusing on the UPC. Universal Product Codes (UPC) is the most heavily used for retail products in grocery stores. Fortunately, there are many readily available API’s and software packages that can make use of basic scanners and smartphone cameras to use these barcodes. 

Other barcodes to consider are the Data Matrix and Quick Response (QR) styles.. Both formats have gained popularity over the years and can now be found in many retail products. 

Data Matrix takes up a smaller footprint than conventional barcodes, and can store larger amounts of information. However, the draw back is it requires more complex scanners, such as smartphones to translate this image. 

QR codes are the latest addition to barcoding technology. More often used as marketing tools to link to a web based information, these codes have become the ‘go to’ style for many storefronts and manufacturers. Just like Data Matrix, the scanning technology required to use these QR codes is more advanced. 

From the available technologies, Jacob was able to put together a simple prototype of a barcode scanning and outputting data from a sample database. A video of Jacob scanning ingredients is available on the website. 

A point to note from testing done. Jacob discovered that setting the barcode scanner to recognise too many barcode formats could cause a failure in the scanning. 

# Monetisation

Steph was tasked with researching avenues of monetisation. For 'Do the Vegan Thing' to continue development there must be a source of income. 

Some of the available options we may consider include: 

* The first consideration to monetise the application would be to have advertisements on the application. After discussion, we wouldn't want to use this as an option based on our own experiences with advertisements when using free applications. It makes applications clunky and not user friendly. Overall we assessed the monetisation would not be worth the potential of discrediting our application idea to feel like a 'money-grab'. 
* The free version of the app would allow consumers to use the ingredient scanner to confirm if the product is vegan. To monetise the application, we would implement features e.g. providing alternative brands, products, foods (for micronutrients) etc. as an extra feature to the application. Additionally, a nutritional planner, local restaurants that serve vegan food, and meal planners. This feature would then allow brands to pay our app to appear higher on the recommended list (similar to how google ad words works) 
* To provide users a trial experience in our additional features, we would offer potentially a 30 day trial to experience all the features over a period of time to hopefully gain more users that are willing to pay for it. 
* Another way to promote our application is by making partnerships with doctors, dieticians and other health care professionals and provide them with flyers brochures with possible QR code to app for clients that are wanting to switch to a plant based diet. 

# Validation of Ingredient

Though this is a major factor in the success of 'Do the Vegan Thing', the research into this method was scrapped due to time constraints. Steph was originally tasked with researching it, but as this was not to be implemented in our early phase testing/prototyping, the team agreed to have her allocate her attention elsewhere. 

# Legal

Junior was tasked with researching the legal ramifications involved with the development and use of 'Do the Vegan Thing'. 

Upon using the application and scanning a consumable product, what is shown to the user depends on various factors. This includes whether the products present in the database at the time of scan, whether or not they're victuals, and if the item in question displays green, red, or amber after classifying which category the product belongs in. As its mandatory by law that all retail products meet the legal labelling criteria, it is assumed that all ingredients that make up the goods are labelled clearly in the ingredients area in its proper format. An example of this is The Food Standards Codes which requires suppliers to declare common foods and food ingredients or their components, that can cause server allergic reactions including anaphylaxis. These foods are: 

* Sesame seeds
* Lupin 
* Soy 
* Wheat 
* Peanuts 

'The Food Standard Code requires suppliers to declare these foods on labels whenever they are present' as:

* Ingredients
* Components of food additives
* Components of processing aids

On the occasion that the user neglects reading the ingredients list directly from the product, and mostly rely on the app, to ensure that all users with allergies are well aware of the potential foods, food ingredients, or components that may possibly lead to an allergic reaction. All likely substances that may or may not cause a reaction will be in bold. This fact will also apply if gluten is found in the product, therefore has to be bold. This is in consideration of Celiac Disease. All this important information will be clearly visible for users to see and interact with if further information about the ingredient is needed. 

Labelling Requirements must include: 

* The best before
* Ingredients, additives and allergens
* Glutens
* Nutrition information 
* Health advice and claims 
* Supplier's information 

When reading the ingredients section, all ingredients must be listed in a descending order from largest contributing ingredient to the least. This important aspect will also be present in the app. If enough information is provided by the product, the percentage per ingredient will also display on screen in a pie graph for the user to fully grasp. Using technologies available to us, comparing products that are the same or similar will allow us to provide alternative products to the user. It is required for any sort of retail product to include all the points mention above and below for the safety of its Consumers. 

Another key and noticeable detail in most ingredients list include asterisk. Asterisk are often used in these lists Soley for the purpose of identifying organic ingredients. Using Asterisks allows the manufactures to avoid the repetitive use of the word organic. Avoiding the repetitiveness, manufactures can ensure that all and every ingredient is included, per the labelling requirements. Utilising the asterisk, the app will convert the asterisks to the word 'organic' in consideration to the infinite space available in the app. 

# Database Storage and Security

As 'Do the Vegan Thing' would require the use of multiple databases, its storage and security are crucial. Taleb was tasked with researching available options for this.

* How do we keep it secure? 
* Security isn't crucial, though what is the minimum security measures we need
* Database needs to be protected as it is our Intellectual property - to be protected 
* If we expand, how would our measures change 
* Users to make an account? Later iteration

To ensure the safety of the company data integrity and security, there will be a requirement of writing secure codes, encrypting all data, being cautious with libraries, allowing authorised API's only, high-level authentication, use the principle of least privilege, deploy proper session handling, use cryptography tools and techniques & lastly, test repeatedly (penetration testing). 

Writing secure code is a fundamental base that each programmer should apply to their work. Bugs and vulnerabilities are components that hackers infiltrate and take advantage of, therefore if the code has been severely monitored and tested as one of the major con aspects of not having a secure code is reputational decline. As a newly introduced application, we want to ensure the users feel safe when using our product & ensuring that the majority of our users have a positive response when using the application for their grocery needs. 

Encrypting all data is another key fundamental that must be taken into accountability for, as the future is only opening many more pathways for hackers seep into databases and take advantage of. Data security is a strong component that our customers will want to ensure is authentic and active, they do not want any of their details taken captive. When using third-party libraries, the provided code must be thoroughly tested prior to be shown to the world. As the face of a smile could be hiding a grin of mischief, we do not know how authentic external support really is. Therefore, to ensure the libraries shared and communicated to our users is safe and not malicious. 

API's that are not authorised is quite similar to allowing problems slip into your world. It can unintentionally provide hackers access privileges that can be a temporary and/or permanent damage to the program. This will be a no-brainer protocol that must be followed and considered, ensuring a minimum requirement of maximum security. 

Providing our users with high-level authentication will only enhance the data integrity of users profile accounts & their devices. Over the years of technology and security, some of the biggest security data breaches occur due to weak authentication. Ensuring the users have a complex password, MFA setup & biometrics authentication such as retina scan & fingerprints available to counter any breaches regarding authentication. 

*Principle of Least Privilege* allows the prompting stages of the application only be a necessity rather than an overkill. We do not want to our program to requesting for more than it should, as an example; We will not need access to a users Contacts, therefore this must be avoided and have set permissions that prompt the user for access that the application requires. In this state it would be their camera. This is a component that must be taken into consideration as we do not want any malicious hacker to find out more than required. 

The application will have proper session handling attributes as we do not want a certain user to be locked in an instance that lasts a lifetime. We would prefer to manage each users active time and have a deadline to time-out the user. This is strongly recommended as wireless devices can be lost/stolen and the misuse of the device can massively affect our position and the users position. 

Cryptography tools and techniques is most definitely crucial towards key management. Storing keys in secure containers is very effective to ensure attackers don't steal them. As an example; *keygen* programs out in the world are designed to capture a key to activate a program. We do not want to experience these with our future paid versions of the application that will provide further and better options. 

Penetration testing is going to be practised throughout the program development to ensure we've scoped out the possibility of how attackers can lurk into our system and manipulate data to their benefit. This will provide a bucket of improvised ideas to encapsulate hackers away from the data integrity involved with this application, whether it be on a database or customer confidentiality.

# User Interface

Clayton was tasked with researching options for the User interface for 'Do the Vegan Thing'. From the below information, he was able to compile and create a prototype UI. 

## Goals

The ultimate goal of the user interface (UI) is to appeal to the user and create a pleasant viewing and navigation experience. To achieve this, considerable attention will need to be placed on uncluttered and appealing layouts, intuitive and easy navigation, and palatable colour palettes employed. How will we make decisions? 

## Survey

One way that we can help hone in on features and user-interface decisions is through surveys. By creating and evaluating the results of surveys, we will better understand the target market and build the app around them, rather than us. 

## A/B Testing

A/B testing involves producing two products, perhaps the two most popular outcomes from the survey, and presenting them side by side to stakeholders. This could either be done in the early stages of development in order to find an initial direction, or in the later stages with two final designs. Alternatively, this process can be repeated throughout development to gauge and adjust the project’s trajectory at multiple points. 

## Feature Ratings

An effective way to receive feedback from users will be to regularly present the option to rate various UI/UX features throughout the development process. This could be displayed as a simple 1-10 slider that returns their response to us. Similarly to the survey, this would aid in understanding the perspectives of the stakeholders. 

## Engagement Measurements

If certain features aren’t getting the desired amount of use, this may warrant an overhaul of said feature. This is where engagement measurements such as traffic to a particular page, active users (daily, monthly, yearly, etc.) and user retention can come in handy. Assessing the user engagement can help with making changes and setting goals to reach a desired level of engagement. 

# Tools

## [proto.io](https://proto.io)

Prototyping the mobile app interface has been in the plan since choosing this project, and many considerations have been put into whether we should build the app from the ground up, prototype it or do a combination of both. Proto.io is a prototyping software that allows us to make a rough mock-up of the application. To the right is a sample sign-in page made using proto.io’s templates with some slight tweaks. 

## _Continuous Improvement_

While not explicitly a tool, continuous improvement is a practice in which a project is incrementally assessed and improved on to ultimately achieve an ideal outcome. In the case of our app, this would be taking the feedback from the multiple sources outlined above, interpreting the data, and implementing appropriate changes/features. As an ongoing task, this will have to be repeated frequently to ensure the app is satisfactory at all times.

[Next](/vegan/roles-scopes-limits.md)