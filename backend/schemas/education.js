export default{
  name:'education',
  title:'Education',
  type: 'document',
  fields:[
      {
          name:'year',
          title:'Year',
          type:'string'
      },
      {
          name:'schools',
          title:'Schools',
          type:'array',
          of:[{ type:'school'}]
      },
  ],
  orderings: [
    {
      title: 'Chronological',
      name: 'educationYearAsc',
      by: [
        {field: 'year', direction: 'asc'}
      ]
    },
  ]
}