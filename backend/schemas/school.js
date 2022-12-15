export default {
  name:'school',
  title:'School',
  type:'document',
  fields:[
          {  
             name:'startYear',
             title:'Start Year',
             type:'date'
          },
          {  
            name:'endYear',
            title:'End Year',
            type:'date'
          },
          {
            name:'major',
            title:'Major',
            type:'string'
          },
          {
            name:'school',
            title:'School',
            type:'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string'
          }
  ]
}