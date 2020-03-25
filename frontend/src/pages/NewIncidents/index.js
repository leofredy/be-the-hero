import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft} from 'react-icons/fi';

export default function NewIncidents()
{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e)
    {
        e.preventDefault();

        const data =
        {
            title,
            description,
            value,
        };

        try{
            await api.post('Incidents', data, {
                headers:
                {
                    Autorizacao: ongId,
                }
            })

            history.push('/profile');

        }catch(error)
        {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Volte para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        valeu={title}
                        onChange={e =>setTitle(e.target.value)}
                        />
                    <textarea 
                        valeu={description}
                        onChange={e =>setDescription(e.target.value)}
                        placeholder="Descrição"
                        />
                    <input 
                        valeu={value}
                        onChange={e =>setValue(e.target.value)}
                        placeholder="Valor em reais"
                        />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}