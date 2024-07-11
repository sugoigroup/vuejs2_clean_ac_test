import 'reflect-metadata'; // 이 줄을 추가하세요

import { Container } from 'inversify';
import UserRepository from '@/mypackage/patient/repositories/UserRepository';
import UserRepositoryInput from '@/mypackage/patient/repositories/InputOutput/UserRepositoryInput';
import UserRepositoryOutput from '@/mypackage/patient/repositories/InputOutput/UserRepositoryOutput';


import FetchUserUseCase from '@/mypackage/patient/usecases/FetchUserUseCase';
import FetchUserUseCaseInput from  '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseInput';
import FetchUserUseCaseOutput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseOutput';



const container = new Container();
container.bind(UserRepository).toSelf();
container.bind(UserRepositoryInput).toSelf();
container.bind(UserRepositoryOutput).toSelf();
container.bind(FetchUserUseCase).toSelf();
container.bind(FetchUserUseCaseInput).toSelf();
container.bind(FetchUserUseCaseOutput).toSelf();

export default container;
