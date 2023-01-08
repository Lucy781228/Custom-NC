OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Неуспешно изчистване на mapping-ите.",
    "Failed to delete the server configuration" : "Неуспешен опит за изтриване на сървърната конфигурация.",
    "Invalid configuration: Anonymous binding is not allowed." : "Невалидна конфигурация: Анонимното обвързване не е разрешено.",
    "Valid configuration, connection established!" : "Валидна конфигурация, връзката е установена!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Валидна конфигурация, но обвързването не бе успешно. Моля, проверете настройките и идентификационните данни на сървъра.",
    "Invalid configuration. Please have a look at the logs for further details." : "Невалидна конфигурация. Моля, разгледайте журналите за повече подробности.",
    "No action specified" : "Не е посочено действие",
    "No configuration specified" : "Не е посочена конфигурация",
    "No data specified" : "Не са посочени данни",
    " Could not set configuration %s" : "Неуспешно задаване на конфигруацията %s",
    "Action does not exist" : "Действието не съществува",
    "Renewing …" : "Подновяване …",
    "Very weak password" : "Много проста парола",
    "Weak password" : "Проста парола",
    "So-so password" : "Не особено добра парола",
    "Good password" : "Добра парола",
    "Strong password" : "Сложна парола",
    "The Base DN appears to be wrong" : "Базовото DN изглежда е грешно",
    "Testing configuration…" : "Изпробване на конфигурацията...",
    "Configuration incorrect" : "Конфигурацията е грешна",
    "Configuration incomplete" : "Конфигурацията не е завършена",
    "Configuration OK" : "Конфигурацията е ОК",
    "Select groups" : "Избери Групи",
    "Select object classes" : "Избери типове обекти",
    "Please check the credentials, they seem to be wrong." : "Моля, проверете идентификационните данни, изглежда че са неправилни.",
    "Please specify the port, it could not be auto-detected." : "Моля, посочете порт, той не може да бъде автоматично определен.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Базовото DN не може да бъде открито автоматично, моля, ревизирайте идентификационните данни, хоста и порта.",
    "Could not detect Base DN, please enter it manually." : "Базовото DN не можа да бъде открито, моля, въведете го ръчно.",
    "{nthServer}. Server" : "{nthServer}. Сървър",
    "No object found in the given Base DN. Please revise." : "Няма намерен обект в даденото базово DN. Моля, ревизирайте.",
    "More than 1,000 directory entries available." : "Налични са повече от 1000 записа в директорията.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} записи, налични в рамките на предоставеното базово DN","{objectsFound} записи, налични в рамките на предоставеното базово DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Възникна грешка. Моля, проверете базовото DN, както и настройките за връзка и идентификационни данни.",
    "Do you really want to delete the current Server Configuration?" : "Наистина ли желаете текущата сървърна конфигурация да бъде изтрита?",
    "Confirm Deletion" : "Потвърди Изтриването",
    "Mappings cleared successfully!" : "Съпоставянията са изчистени успешно!",
    "Error while clearing the mappings." : "Грешка при изчистването на съпоставянията.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Не е позволено анонимно обвързване. Моля, посочете потребителско DN и парола.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Грешка при LDAP операции. Анонимното обвързване може да не е разрешено.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Записването не беше успешно. Моля, уверете се, че базата данни е в експлоатация. Презаредете, преди да продължите.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Превключването на режима ще активира автоматичните LDAP заявки. В зависимост от размера на вашия LDAP може да отнеме известно време. Все още ли искате да превключите режима?",
    "Mode switch" : "Превключване на режим",
    "Select attributes" : "Избери атрибути",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Потребителят не е намерен. Моля, проверете вашите атрибути за вход и име на потребител. Ефективен филтър (за копиране и поставяне за проверка от командния ред):",
    "User found and settings verified." : "Намерен е потребител и настройките са проверени.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Помислете за стесняване на търсенето, тъй като то обхваща много потребители, само първият от които ще може да влезе.",
    "An unspecified error occurred. Please check log and settings." : "Възникна неуточнена грешка. Моля, проверете журнала и настройките.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Невалиден филтър за търсене, вероятно поради проблеми със синтаксиса като нечетен брой отворени и затворени скоби. Моля, проверете.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Възникна грешка при свързване към LDAP/AD. Моля, проверете хост сървър, порт и идентификационни данни.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "Заместителят „ %u“ липсва. Той ще бъде заменен с името за вход при запитване към LDAP/AD.",
    "Please provide a login name to test against" : "Моля, посочете име за вход, срещу което да тествате",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "Груповата кутия е деактивирана, тъй като LDAP/AD сървърът не поддържа memberOf.",
    "Password change rejected. Hint: " : "Смяната на паролата е отхвърлена. Подсказка:",
    "Please login with the new password" : "Моля, влезте с новата парола",
    "LDAP User backend" : "LDAP потребителски сървър",
    "Your password will expire tomorrow." : "Вашата парола ще изтече утре.",
    "Your password will expire today." : "Вашата парола ще изтече днес.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Вашата парола ще изтече в рамките на %n дни.","Вашата парола ще изтече в рамките на %n дни."],
    "LDAP/AD integration" : "LDAP/AD интеграция",
    "_%n group found_::_%n groups found_" : ["%n открити групи","%n открити групи"],
    "> 1000 groups found" : "> 1000 открити групи",
    "> 1000 users found" : "> 1000 намерени потребители",
    "_%n user found_::_%n users found_" : ["%n намерени потребители","%n намерени потребители"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Не можа да се открие атрибут за показвано име на потребителя. Моля, посочете го сами в разширените настройки на LDAP.",
    "Could not find the desired feature" : "Не е открита желанта функция",
    "Invalid Host" : "Невалиден хост",
    "LDAP user and group backend" : "Потребителски и групов LDAP сървър",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Това приложение позволява на администраторите да свържат Nextcloud към потребителска директория, базирана на LDAP. ",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Това приложение позволява на администраторите да свържат Nextcloud към LDAP-базирана потребителска директория за удостоверяване и предоставяне на потребители, групи и потребителски атрибути. Администраторите могат да конфигурират това приложение да се свързва с една или повече LDAP директории или Active Directories/активни директории/, чрез LDAP интерфейс. Атрибути, като потребителска квота, имейл, снимки на аватар, членство в групи и други могат да бъдат изтеглени в Nextcloud от директория със съответните заявки и филтри.\n\nПотребителя влиза в Nextcloud със своите LDAP или AD идентификационни данни и му се предоставя достъп въз основа на заявка за удостоверяване, обработвана от LDAP или AD сървъра. Nextcloud не съхранява LDAP или AD пароли, а тези идентификационни данни се използват за удостоверяване на потребител и след това Nextcloud използва сесия за потребителския идентификатор. Повече информация е налична в документацията на LDAP потребител и групов сървър.",
    "Test Configuration" : "Изпробване на конфигурацията",
    "Help" : "Помощ",
    "Groups meeting these criteria are available in %s:" : "Групи спазващи тези критерии са разположени в %s:",
    "Only these object classes:" : "Само тези класове обекти:",
    "Only from these groups:" : "Само от тези групи:",
    "Search groups" : "Търсене на групи",
    "Available groups" : "Налични групи",
    "Selected groups" : "Избрани групи",
    "Edit LDAP Query" : "Редактиране на LDAP заявка",
    "LDAP Filter:" : "LDAP филтър:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Филтърът посочва кои LDAP групи ще имат достъп до %s инсталацията.",
    "Verify settings and count the groups" : "Проверете настройките и пребройте групите",
    "When logging in, %s will find the user based on the following attributes:" : "Когато влезе, %s ще намери потребител въз основа на следните атрибути:",
    "LDAP/AD Username:" : "LDAP / AD Потребител:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Позволява влизане с име на потребител на LDAP/AD, което е или „uid“ или „sAMAccountName“ и ще бъде открито.",
    "LDAP/AD Email Address:" : "LDAP / AD имейл адрес:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Позволява влизане срещу имейл атрибут. Разрешени са „mail “ и „mailPrimaryAddress“.",
    "Other Attributes:" : "Други атрибути:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Определя филтър, който да се приложи при опит за влизане. „%%“ замества името на потребител в действието за влизане. Пример: „uid=%%uid “",
    "Test Loginname" : "Проверка на Потребителско име",
    "Verify settings" : "Потвърди настройките",
    "%s. Server:" : "%s. Сървър:",
    "Add a new configuration" : "Добавяне на нова конфигурация",
    "Copy current configuration into new directory binding" : "Копиране на текущата конфигурация в ново обвързване на директория",
    "Delete the current configuration" : "Изтриване на текущата конфигурация",
    "Host" : "Хост",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Можете да пропуснете протокола, освен ако не изисквате SSL. Ако е така, започнете с ldaps://",
    "Port" : "Порт",
    "Detect Port" : "Открит Port",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN на потребителят, с който ще стане свързването, пр. uid=agent,dc=example,dc=com. За анонимен достъп, остави DN и Парола празни.",
    "Password" : "Парола",
    "For anonymous access, leave DN and Password empty." : "За анонимен достъп, остави DN и Парола празни.",
    "Save Credentials" : "Запиши идентификационни данни",
    "One Base DN per line" : "По един Base DN на ред",
    "You can specify Base DN for users and groups in the Advanced tab" : "Можете да настроите Base DN за отделни потребители/групи в раздела \"Допълнителни\"",
    "Detect Base DN" : "Откриване на базов DN",
    "Test Base DN" : " Тестване на базов DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избягва автоматични LDAP заявки. По-добра опция за големи инсталации, но изисква LDAP познания.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ръчно въвеждана на LDAP филтри(препоръчано за по-големи папки)",
    "Listing and searching for users is constrained by these criteria:" : "Записването в списък и търсенето на потребители е ограничено от следните критерии:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Най-често срещаните обектни класове за потребителите са OrganizationalPerson, person, user и inetOrgPerson. Ако не сте сигурни кой обектен клас да изберете, моля, консултирайте се с администратора на директорията.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Филтърът посочва кои LDAP потребители ще имат достъп до %s инсталацията.",
    "Verify settings and count users" : "Проверете настройките и пребройте потребителите",
    "Saving" : "Записване",
    "Back" : "Назад",
    "Continue" : "Продължи",
    "Please renew your password." : "Моля, обновете вашата парола.",
    "An internal error occurred." : "Възникна вътрешно сървърна грешка.",
    "Please try again or contact your administrator." : "Опитайте отново или се свържете с администраотра.",
    "Current password" : "Текуща парола",
    "New password" : "Нова парола",
    "Renew password" : "Обновете парола",
    "Wrong password." : "Грешна парола.",
    "Cancel" : "Отказ",
    "Server" : "Сървър",
    "Users" : "Потребители",
    "Login Attributes" : "Атрибути за влизане",
    "Groups" : "Групи",
    "Expert" : "Експерт",
    "Advanced" : "Допълнителни",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Предупреждение:</b> PHP LDAP модулът не е инсталиран, сървърът няма да работи. Моля, поискай системният админстратор да го инсталира.",
    "Connection Settings" : "Настройки на Връзката",
    "Configuration Active" : "Конфигурацията е Активна",
    "When unchecked, this configuration will be skipped." : "Когато не е отметнато, тази конфигурация ще бъде прескочена.",
    "Backup (Replica) Host" : "Резервен (Реплика) Хост сървър",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Задай незадължителен резервен сървър. Трябва да бъде реплика на главния LDAP/AD сървър.",
    "Backup (Replica) Port" : "Резервен (Реплика) Порт",
    "Disable Main Server" : "Изключи Главиния Сървър",
    "Only connect to the replica server." : "Свържи се само с репликирания сървър.",
    "Turn off SSL certificate validation." : "Изключи валидацията на SSL сертификата.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не е препоръчително! Ползвайте само за тестване. Ако връзката работи само с тази опция, внесете SSL сертификата на LDAP сървъра във вашия %s сървър.",
    "Cache Time-To-Live" : "Кеширай Time-To-Live",
    "in seconds. A change empties the cache." : "в секунди. Всяка промяна изтрива кеша.",
    "Directory Settings" : "Настройки на Директорията",
    "User Display Name Field" : "Поле на име за визуализация на потребител",
    "The LDAP attribute to use to generate the user's display name." : "LDAP атрибутът, който да бъде използван за генериране на видимото име на потребителя.",
    "2nd User Display Name Field" : "2-ро поле на име за визуализация на потребител",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "По избор. LDAP атрибут, който да се добави към екранното име в скоби. Резултати напр.  »Джон Доу (john.doe@example.org)«.",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "По един User Base DN на ред",
    "User Search Attributes" : "Атрибути на Потребителско Търсене",
    "Optional; one attribute per line" : "По желание; един атрибут на ред",
    "Group Display Name Field" : "Поле на име за визуализация на група",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP атрибутът, който да бъде използван за генерирането на видмото име на групата.",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "По един Group Base DN на ред",
    "Group Search Attributes" : "Атрибути на Групово Търсене",
    "Group-Member association" : "Group-Member асоциация",
    "Dynamic Group Member URL" : "URL адрес на член на динамичната група",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "LDAP е атрибутът, който на групови обекти съдържа URL адрес за търсене на LDAP, който определя, кои обекти принадлежат към групата. (Празна настройка деактивира функционалността за динамично членство в група.)",
    "Nested Groups" : "Вложени Групи",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Когато е включени, се подържат групи в групи. (Работи единствено ако членът на групата притежава атрибута DNs).",
    "Paging chunksize" : "Размер на paging-а",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Размерът използван за връщането на големи резултати от LDAP търсения като изброяване на потребители или групи. (Стойност 0 изключва paged LDAP търсения в тези ситуации).",
    "Enable LDAP password changes per user" : "Активиране на промените на LDAP паролата на потребител",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Позволете на потребителите на LDAP да променят паролата си и позволете на супер администраторите и груповите администратори да променят паролата на своите потребители на LDAP. Работи само когато политиките за контрол на достъпа са конфигурирани в съответствие на LDAP сървъра. Тъй като пароли се изпращат в обикновен текст към LDAP сървъра, трябва да се използва транспортно криптиране и да се конфигурира хеширането на паролата на LDAP сървъра.",
    "(New password is sent as plain text to LDAP)" : "(Новата парола се изпраща като обикновен текст до LDAP)",
    "Default password policy DN" : "Политика за парола по подразбиране на DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "DN на политика за парола по подразбиране, която ще се използва за обработка на изтичане на паролата. Работи само когато промените на LDAP паролата на потребител са разрешени и се поддържа само от OpenLDAP. Оставете празно, за да деактивирате обработката на изтичане на паролата.",
    "Special Attributes" : "Специални атрибути",
    "Quota Field" : "Поле за Квота",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Оставете празно за квота по подразбиране на потребителя. В противен случай посочете LDAP/AD атрибут.",
    "Quota Default" : "Детайли на квотата",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Отмяна на квотата по подразбиране за потребители на LDAP, които нямат зададена квота в полето за квота.",
    "Email Field" : "Поле за имейл",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Задайте имейла на потребителя от неговия LDAP атрибут. Оставете го празно за поведение по подразбиране.",
    "User Home Folder Naming Rule" : "Правило за наименуване на домашна папка на потребителя",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Оставете празно за име на потребител (по пдразбиране). Или посочете LDAP/AD атрибут.",
    "\"$home\" Placeholder Field" : "„$home“ Заместващо поле",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home в конфигурация за външно хранилище ще бъде заменен със стойността на посочения атрибут",
    "Internal Username" : "Вътрешно потребителско име",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "По подразбиране вътрешното име на потребител ще бъде създадено от атрибута UUID. Той гарантира, че името на потребител е уникално и знаците не трябва да се преобразуват. Вътрешното име на потребител има ограничението, че са позволени само тези знаци: [a-zA-Z0-9_.@-]. Други знаци се заменят с тяхното ASCII съответствие или просто се пропускат. При сблъсъци числото ще бъде добавено/увеличено. Вътрешното име на потребител се използва за вътрешно идентифициране на потребител. Това също е името по подразбиране за домашната папка на потребителя. Той също така е част от отдалечени URL адреси, например за всички *DAV услуги. С тази настройка поведението по подразбиране може да бъде отменено. Промените ще имат ефект само върху ново съпоставени (добавени) потребители на LDAP. Оставете го празно за поведение по подразбиране. ",
    "Internal Username Attribute:" : "Атрибут на вътрешното потребителско име:",
    "Override UUID detection" : "Промени UUID откриването",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Обикновено UUID атрибутът ще бъде намерен автоматично. UUID атрибута се използва, за да се идентифицират еднозначно LDAP потребители и групи. Освен това ще бъде генерирано вътрешното име базирано на UUID-то, ако такова не е посочено по-горе. Можете да промените настройката и да използвате атрибут по свой избор. Наложително е атрибутът да бъде уникален както за потребителите така и за групите. Промените ще се отразят само за новодобавени (map-нати) LDAP потребители.",
    "UUID Attribute for Users:" : "UUID атрибут за потребителите:",
    "UUID Attribute for Groups:" : "UUID атрибут за групите:",
    "Username-LDAP User Mapping" : "Име на потребител-LDAP Потребителско съпоставяне ",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Потребителските имена се използват за съхраняване и присвояване на метаданни. С цел точно идентифициране и разпознаване на потребителите, всеки потребител на LDAP ще има вътрешно име на потребител. Това изисква съпоставяне от име на потребител към потребител на LDAP. Създаденото име на потребител се съпоставя с UUID на потребителя на LDAP. Освен това DN се кешира, за да се намали взаимодействието с LDAP, но не се използва за идентификация. Ако DN се промени, промените ще бъдат намерени. Вътрешното име на потребител се използва навсякъде. Изчистването на съпоставянията ще има остатъци навсякъде. Изчистването на съпоставянията не е чувствително към конфигурацията, засяга всички LDAP конфигурации! Никога не изчиствайте съпоставянията в производствена среда, само в тестов или експериментален етап.",
    "Clear Username-LDAP User Mapping" : "Изчистване на име на потребител-LDAP Потребителско съпоставяне ",
    "Clear Groupname-LDAP Group Mapping" : "Изчистване на име на група-LDAP Потребителско съпоставяне ",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "По подразбиране вътрешното име на потребител ще бъде създадено от атрибута UUID. Той гарантира, че името на потребител е уникално и знаците не трябва да се преобразуват. Вътрешното име на потребител има ограничението, че са позволени само тези знаци: [a-zA-Z0-9_.@-]. Други знаци се заменят с тяхното ASCII съответствие или просто се пропускат. При сблъсъци числото ще бъде добавено/увеличено. Вътрешното име на потребител се използва за вътрешно идентифициране на потребител. Това също е името по подразбиране за домашната папка на потребителя. Той също така е част от отдалечени URL адреси, например за всички *DAV услуги. С тази настройка поведението по подразбиране може да бъде отменено. Промените ще имат ефект само върху ново съпоставени (добавени) потребители на LDAP. Оставете го празно за поведение по подразбиране. "
},
"nplurals=2; plural=(n != 1);");
