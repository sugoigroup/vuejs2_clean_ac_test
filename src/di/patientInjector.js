import 'reflect-metadata'; // 이 줄을 추가하세요

import { Container } from 'inversify';
import UserRepository from '@/mypackage/patient/repositories/UserRepository';
import UserRepositoryInput from '@/mypackage/patient/repositories/InputOutput/UserRepositoryInput';
import UserRepositoryOutput from '@/mypackage/patient/repositories/InputOutput/UserRepositoryOutput';


import FetchUserUseCase from '@/mypackage/patient/usecases/FetchUserUseCase';

import FetchUserDebugUseCase from '@/mypackage/patient/usecases/FetchUserDebugUseCase';
import FetchUserUseCaseInput from  '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseInput';
import FetchUserUseCaseOutput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseOutput';

import News from '@/mypackage/apis/provider/News';


const container = new Container();
container.bind(UserRepository).toSelf();
container.bind(UserRepositoryInput).toSelf();
container.bind(UserRepositoryOutput).toSelf();
if (process.env.NODE_ENV  !== 'production') {   
    container.bind(FetchUserUseCase).to(FetchUserDebugUseCase);
} else {
    container.bind(FetchUserUseCase).toSelf();
}

container.bind(FetchUserUseCaseInput).toSelf();
container.bind(FetchUserUseCaseOutput).toSelf();

container.bind(News).toSelf();

export default container;
