
const changeItems=(name,level,id)=>{

	return {
		type:'changeItems',
		changeName:name,
		changeLevel:level,
		id:id
	}
}
export default changeItems;