<?php

require('../libs/Smarty.class.php');	//=> works
require('../libs/SmartyBC.class.php');	//=>

require 'utils/utils.php';
require 'utils/DB.php';

$var = "abc";

function do_D_2_V_1_1() {
	
// 	echo "hi";

	$target = "bca";
	
	$before = "abc";
	
	$after = "acb";
	
	$str_new = Utils::perm($target, $before, $after);
	
	
	printf("[%s : %d] before = %s / after = %s", 
					Utils::get_Dirname(__FILE__, CONS::$proj_Name), __LINE__, 
					$before, $after);
	
	echo "<br>"; echo "<br>";
	
	printf("[%s : %d] target = %s / new = %s", 
					Utils::get_Dirname(__FILE__, CONS::$proj_Name), __LINE__, $target, $str_new);
	
	echo "<br>"; echo "<br>";
	
	
	
	
}

function execute() {
	
	do_D_2_V_1_1();
	
}

execute();
