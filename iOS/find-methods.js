function run_find_specific_method_in_all_classes(func_name)
{
	console.log("[*] Started: Find Specific Method in All Classes");
	for (var className in ObjC.classes)
	{
		try
		{
			if (ObjC.classes.hasOwnProperty(className))
			{
				try
				{
					//var methods = ObjC.classes[className].$methods;
					var methods = ObjC.classes[className].$ownMethods;
					for (var i = 0; i < methods.length; i++)
					{
						try
						{
							if(methods[i].includes(func_name))
							{
								console.log("[+] Class: " + className);
								console.log("\t[-] Method: "+methods[i]);
							}
						}
						catch(err)
						{
							console.log("[!] Exception3: " + err.message);
						}
					}
				}
				catch(err)
				{
					console.log("[!] Exception2: " + err.message);
				}
			}
		}
		catch(err)
		{
			console.log("[!] Exception1: " + err.message);
		}
	}
	console.log("[*] Completed: Find Specific Method in All Classes");
}

function find_specific_method_in_all_classes(func_name)
{
	setImmediate(run_find_specific_method_in_all_classes,[func_name])
}

//Your function name goes here
find_specific_method_in_all_classes("function_name_here")
