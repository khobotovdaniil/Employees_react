import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={(e) => {
                    const target = e.currentTarget;
                    const summ = +(target.value).replace(/\D/g, '');
                    
                    onSalaryChange(id, summ);
                    target.value = summ + '$';

                    const length = target.value.length;
                    if (target.selectionStart === length) {
                        target.setSelectionRange(length - 1, length - 1);
                    }
                }}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;