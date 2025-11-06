import React, {useState} from 'react'
import {Plus} from "lucide-react";

const SkillsForm = ({ data, onChange }) => {
    const [newSkill, setNewSkill] = useState('');

    const addSkill = () => {
       if (newSkill.trim() && !data.includes(newSkill.trim())) {
            onChange([...data, newSkill.trim()]);
            setNewSkill('');
       }
    }

    const removeSkill = (index) => {
        onChange(data.filter((_, i)=> i !== index));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    }

    return (
        <div className='space-y-4'>
            <div>
                <h3 className='flex items-center gap-2 text-lg text-gray-900 font-semibold'>Skills</h3>
                <p className='text-sm text-gray-500'>Add your technical and soft skills </p>
            </div>

            <div className='flex gap-2'>
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder='Enter a skill'
                    className='flex-1 py-2 px-3 text-sm'
                />
                <button
                    onClick={addSkill}
                >
                    <Plus className='size-4' />
                </button>
            </div>
        </div>
    )
}
export default SkillsForm
