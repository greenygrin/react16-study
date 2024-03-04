import Layout from '../components/Layout';
import Link from 'next/link';

const getParam = () => {
    return (
        <Layout>
            <h1>get_param.js</h1>
            <h2>100 + 200 = ?</h2>
            <ul>
                {/** 
                 * page폴더 내외 "폴더/파일이름" -> 대소문자 구분X
                 * as 속성에 입력한 값으로 url 표출
                 */}
                <li><Link href="/get_param_result/?ans=100" as="/helloworld"><a>100</a></Link></li>
                <li><Link href="/get_param_result/?ans=200" as="/helloworld"><a>200</a></Link></li>
                <li><Link href="/get_param_result/?ans=300" as="/helloworld"><a>300</a></Link></li>
                <li><Link href="/get_param_result/?ans=400" as="/helloworld"><a>400</a></Link></li>
            </ul>
        </Layout>
    );
};

export default getParam;