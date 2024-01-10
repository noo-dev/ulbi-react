import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput 
                placeholder="Search a post"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect 
                value={filter.sort}
                onChange={option => setFilter({...filter, sort: option})}
                defaultValue="sort by" 
                options={[
                    {value: 'title', name: 'Sort by title'},
                    {value: 'body', name: 'Sort by description'},
                ]} 
            /> 
        </div>
    );
}

export default PostFilter;