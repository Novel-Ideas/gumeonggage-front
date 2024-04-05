import React from 'react';
import PageLayout from '../../components/pageComponents/PageLayout';

function MenuPage(props) {
    return (
        <PageLayout>
            <div>
                <div>
                    <div>카테고리</div>
                    <div>메뉴</div>
                </div>
                <div>
                    <div>주문 메뉴</div>
                    <div>
                        <button>주문하기</button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default MenuPage;