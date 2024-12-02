import React from 'react'

const CategoryFilter = ({categories, onSelect}) => {

  return (
    <>
      <select className="form-control" id="categorySelect" onChange={(e) => onSelect(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
    </>
  )
}

export default CategoryFilter