const addSubmit=(value1,value2)=>{
	
	return {
		type:'addSubmit',
		taskName:value1,
		level:value2
	}
}
export default addSubmit;