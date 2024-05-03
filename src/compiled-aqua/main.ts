/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const uploadFolder_script = `
(xor
 (new $b-0
  (new $arr-0
   (new $results
    (new $b
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                     (call %init_peer_id% ("getDataSrv" "pinataJWTKey") [] -pinataJWTKey-arg-)
                    )
                    (par
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (new $option-inline
                             (seq
                              (seq
                               (new %TestV0_obj_map
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (ap ("chainNetworkId" 31337) %TestV0_obj_map)
                                      (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj_map)
                                     )
                                     (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj_map)
                                    )
                                    (ap ("definition" "bafkreib45sk65phhw4fx4jrev7zyjim36birjb4rqlrnqk4mfrxpaonnce") %TestV0_obj_map)
                                   )
                                   (ap ("matched" true) %TestV0_obj_map)
                                  )
                                  (ap ("timestamp" "2024-05-03T16:53:10.353Z") %TestV0_obj_map)
                                 )
                                 (canon %init_peer_id% %TestV0_obj_map  TestV0_obj)
                                )
                               )
                               (xor
                                (ap TestV0_obj $option-inline)
                                (null)
                               )
                              )
                              (canon %init_peer_id% $option-inline  #option-inline-0)
                             )
                            )
                            (new %Deals_obj_map
                             (seq
                              (ap ("testV0" #option-inline-0) %Deals_obj_map)
                              (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                             )
                            )
                           )
                           (ap Deals_obj.$.testV0 Deals_obj_flat)
                          )
                          (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                         )
                         (xor
                          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                          (fail :error:)
                         )
                        )
                        (new -if-error-
                         (xor
                          (seq
                           (match ret.$.success false
                            (seq
                             (new $array-inline
                              (seq
                               (seq
                                (ap "Failed to resolve subnet: " $array-inline)
                                (ap ret.$.error $array-inline)
                               )
                               (canon %init_peer_id% $array-inline  #array-inline-0)
                              )
                             )
                             (call %init_peer_id% ("run-console" "print") [#array-inline-0])
                            )
                           )
                           (new $-hop-
                            (new #-hopc-
                             (canon -relay- $-hop-  #-hopc-)
                            )
                           )
                          )
                          (seq
                           (seq
                            (ap :error: -if-error-)
                            (xor
                             (seq
                              (match :error:.$.error_code 10001
                               (null)
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon -relay- $-hop-  #-hopc-)
                               )
                              )
                             )
                             (fail -if-error-)
                            )
                           )
                           (new $-hop-
                            (new #-hopc-
                             (canon -relay- $-hop-  #-hopc-)
                            )
                           )
                          )
                         )
                        )
                       )
                       (ap ret.$.workers ret_flat)
                      )
                      (fold ret_flat w-0
                       (par
                        (xor
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (new $-hop-
                                 (new #-hopc-
                                  (canon -relay- $-hop-  #-hopc-)
                                 )
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon w-0.$.host_id $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (call w-0.$.worker_id.[0] ("vault" "put") ["hello"] ret-0)
                              )
                              (call w-0.$.worker_id.[0] ("cioPinata" "addFolder") ["." -pinataJWTKey-arg-] ret-1)
                             )
                             (ap ret-1 $results)
                            )
                            (new $-hop-
                             (new #-hopc-
                              (canon w-0.$.host_id $-hop-  #-hopc-)
                             )
                            )
                           )
                           (new $-hop-
                            (new #-hopc-
                             (canon -relay- $-hop-  #-hopc-)
                            )
                           )
                          )
                          (new $-hop-
                           (new #-hopc-
                            (canon %init_peer_id% $-hop-  #-hopc-)
                           )
                          )
                         )
                         (seq
                          (seq
                           (seq
                            (new $-hop-
                             (new #-hopc-
                              (canon w-0.$.host_id $-hop-  #-hopc-)
                             )
                            )
                            (new $-hop-
                             (new #-hopc-
                              (canon -relay- $-hop-  #-hopc-)
                             )
                            )
                           )
                           (new $-hop-
                            (new #-hopc-
                             (canon %init_peer_id% $-hop-  #-hopc-)
                            )
                           )
                          )
                          (fail :error:)
                         )
                        )
                        (next w-0)
                       )
                       (never)
                      )
                     )
                     (null)
                    )
                   )
                   (new $results_test
                    (seq
                     (seq
                      (fold $results results_fold_var
                       (seq
                        (seq
                         (ap results_fold_var $results_test)
                         (canon %init_peer_id% $results_test  #results_iter_canon)
                        )
                        (xor
                         (match #results_iter_canon.length 3
                          (null)
                         )
                         (next results_fold_var)
                        )
                       )
                       (never)
                      )
                      (canon %init_peer_id% $results_test  #results_result_canon)
                     )
                     (ap #results_result_canon results_gate)
                    )
                   )
                  )
                  (canon %init_peer_id% $results  #results_canon)
                 )
                 (fold #results_canon r-0
                  (seq
                   (new -if-error-
                    (xor
                     (match r-0.$.success true
                      (ap r-0.$.result $arr-0)
                     )
                     (seq
                      (ap :error: -if-error-)
                      (xor
                       (match :error:.$.error_code 10001
                        (null)
                       )
                       (fail -if-error-)
                      )
                     )
                    )
                   )
                   (next r-0)
                  )
                  (null)
                 )
                )
                (canon %init_peer_id% $arr-0  #-arr-fix-0)
               )
               (ap #-arr-fix-0 -arr-flat-0)
              )
              (fold -arr-flat-0 s-0
               (seq
                (call %init_peer_id% ("run-console" "print") [s-0])
                (next s-0)
               )
               (null)
              )
             )
             (canon %init_peer_id% $results  #results_canon-0)
            )
            (xor
             (match #results_canon-0.$.[0].success false
              (ap #results_canon-0.$.[0].success and)
             )
             (seq
              (xor
               (match #results_canon-0.$.[0].result #results_canon-0.$.[1].result
                (ap true eq)
               )
               (ap false eq)
              )
              (ap eq and)
             )
            )
           )
           (xor
            (match and false
             (ap and and-0)
            )
            (seq
             (xor
              (match #results_canon-0.$.[0].result #results_canon-0.$.[2].result
               (ap true eq-0)
              )
              (ap false eq-0)
             )
             (ap eq-0 and-0)
            )
           )
          )
          (new -if-else-error-
           (new -else-error-
            (new -if-error-
             (xor
              (match and-0 true
               (ap true $b-0)
              )
              (seq
               (ap :error: -if-error-)
               (xor
                (match :error:.$.error_code 10001
                 (ap false $b-0)
                )
                (seq
                 (seq
                  (ap :error: -else-error-)
                  (xor
                   (match :error:.$.error_code 10001
                    (ap -if-error- -if-else-error-)
                   )
                   (ap -else-error- -if-else-error-)
                  )
                 )
                 (fail -if-else-error-)
                )
               )
              )
             )
            )
           )
          )
         )
         (new $b-0_test
          (seq
           (seq
            (fold $b-0 b-0_fold_var
             (seq
              (seq
               (ap b-0_fold_var $b-0_test)
               (canon %init_peer_id% $b-0_test  #b-0_iter_canon)
              )
              (xor
               (match #b-0_iter_canon.length 1
                (null)
               )
               (next b-0_fold_var)
              )
             )
             (never)
            )
            (canon %init_peer_id% $b-0_test  #b-0_result_canon)
           )
           (ap #b-0_result_canon b-0_gate)
          )
         )
        )
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (match b-0_gate.$.[0] true
             (seq
              (new $results_test-0
               (seq
                (seq
                 (fold $results results_fold_var-0
                  (seq
                   (seq
                    (ap results_fold_var-0 $results_test-0)
                    (canon %init_peer_id% $results_test-0  #results_iter_canon-0)
                   )
                   (xor
                    (match #results_iter_canon-0.length 1
                     (null)
                    )
                    (next results_fold_var-0)
                   )
                  )
                  (never)
                 )
                 (canon %init_peer_id% $results_test-0  #results_result_canon-0)
                )
                (ap #results_result_canon-0 results_gate-0)
               )
              )
              (new -if-else-error-
               (new -else-error-
                (new -if-error-
                 (xor
                  (match results_gate-0.$.[0].result "QmWfVY9y3xjsixTgbd9AorQxH7VtMpzfx2HaWtsoUYecaX"
                   (seq
                    (call %init_peer_id% ("run-console" "print") ["test ran succesfully"])
                    (ap true $b)
                   )
                  )
                  (seq
                   (ap :error: -if-error-)
                   (xor
                    (match :error:.$.error_code 10001
                     (seq
                      (seq
                       (seq
                        (new $results_test-1
                         (seq
                          (seq
                           (fold $results results_fold_var-1
                            (seq
                             (seq
                              (ap results_fold_var-1 $results_test-1)
                              (canon %init_peer_id% $results_test-1  #results_iter_canon-1)
                             )
                             (xor
                              (match #results_iter_canon-1.length 1
                               (null)
                              )
                              (next results_fold_var-1)
                             )
                            )
                            (never)
                           )
                           (canon %init_peer_id% $results_test-1  #results_result_canon-1)
                          )
                          (ap #results_result_canon-1 results_gate-1)
                         )
                        )
                        (call %init_peer_id% ("run-console" "print") [results_gate-1.$.[0].result])
                       )
                       (call %init_peer_id% ("run-console" "print") ["peers returned an unexpected cid"])
                      )
                      (ap false $b)
                     )
                    )
                    (seq
                     (seq
                      (ap :error: -else-error-)
                      (xor
                       (match :error:.$.error_code 10001
                        (ap -if-error- -if-else-error-)
                       )
                       (ap -else-error- -if-else-error-)
                      )
                     )
                     (fail -if-else-error-)
                    )
                   )
                  )
                 )
                )
               )
              )
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10001
               (seq
                (call %init_peer_id% ("run-console" "print") ["peers return unequal results"])
                (ap false $b)
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
       )
       (new $b_test
        (seq
         (seq
          (fold $b b_fold_var
           (seq
            (seq
             (ap b_fold_var $b_test)
             (canon %init_peer_id% $b_test  #b_iter_canon)
            )
            (xor
             (match #b_iter_canon.length 1
              (null)
             )
             (next b_fold_var)
            )
           )
           (never)
          )
          (canon %init_peer_id% $b_test  #b_result_canon)
         )
         (ap #b_result_canon b_gate)
        )
       )
      )
      (call %init_peer_id% ("callbackSrv" "response") [b_gate.$.[0]])
     )
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type UploadFolderParams = [pinataJWTKey: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, pinataJWTKey: string, config?: {ttl?: number}];

export type UploadFolderResult = Promise<boolean>;

export function uploadFolder(...args: UploadFolderParams): UploadFolderResult {
    return callFunction$$(
        args,
        {
    "functionName": "uploadFolder",
    "arrow": {
        "domain": {
            "fields": {
                "pinataJWTKey": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        uploadFolder_script
    );
}

export const uploadFile_script = `
(xor
 (new $b-0
  (new $results
   (new $b
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
               (call %init_peer_id% ("getDataSrv" "pinataJWTKey") [] -pinataJWTKey-arg-)
              )
              (par
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (new $option-inline
                       (seq
                        (seq
                         (new %TestV0_obj_map
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (ap ("chainNetworkId" 31337) %TestV0_obj_map)
                                (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj_map)
                               )
                               (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj_map)
                              )
                              (ap ("definition" "bafkreib45sk65phhw4fx4jrev7zyjim36birjb4rqlrnqk4mfrxpaonnce") %TestV0_obj_map)
                             )
                             (ap ("matched" true) %TestV0_obj_map)
                            )
                            (ap ("timestamp" "2024-05-03T16:53:10.353Z") %TestV0_obj_map)
                           )
                           (canon %init_peer_id% %TestV0_obj_map  TestV0_obj)
                          )
                         )
                         (xor
                          (ap TestV0_obj $option-inline)
                          (null)
                         )
                        )
                        (canon %init_peer_id% $option-inline  #option-inline-0)
                       )
                      )
                      (new %Deals_obj_map
                       (seq
                        (ap ("testV0" #option-inline-0) %Deals_obj_map)
                        (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                       )
                      )
                     )
                     (ap Deals_obj.$.testV0 Deals_obj_flat)
                    )
                    (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                   )
                   (xor
                    (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                    (fail :error:)
                   )
                  )
                  (new -if-error-
                   (xor
                    (seq
                     (match ret.$.success false
                      (seq
                       (new $array-inline
                        (seq
                         (seq
                          (ap "Failed to resolve subnet: " $array-inline)
                          (ap ret.$.error $array-inline)
                         )
                         (canon %init_peer_id% $array-inline  #array-inline-0)
                        )
                       )
                       (call %init_peer_id% ("run-console" "print") [#array-inline-0])
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (seq
                     (seq
                      (ap :error: -if-error-)
                      (xor
                       (seq
                        (match :error:.$.error_code 10001
                         (null)
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                       )
                       (fail -if-error-)
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                   )
                  )
                 )
                 (ap ret.$.workers ret_flat)
                )
                (fold ret_flat w-0
                 (par
                  (xor
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (new $-hop-
                          (new #-hopc-
                           (canon -relay- $-hop-  #-hopc-)
                          )
                         )
                         (new $-hop-
                          (new #-hopc-
                           (canon w-0.$.host_id $-hop-  #-hopc-)
                          )
                         )
                        )
                        (call w-0.$.worker_id.[0] ("cioPinata" "addAsFile") ["hello" "test" -pinataJWTKey-arg-] ret-0)
                       )
                       (ap ret-0 $results)
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon w-0.$.host_id $-hop-  #-hopc-)
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon %init_peer_id% $-hop-  #-hopc-)
                     )
                    )
                   )
                   (seq
                    (seq
                     (seq
                      (new $-hop-
                       (new #-hopc-
                        (canon w-0.$.host_id $-hop-  #-hopc-)
                       )
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon -relay- $-hop-  #-hopc-)
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon %init_peer_id% $-hop-  #-hopc-)
                      )
                     )
                    )
                    (fail :error:)
                   )
                  )
                  (next w-0)
                 )
                 (never)
                )
               )
               (null)
              )
             )
             (new $results_test
              (seq
               (seq
                (fold $results results_fold_var
                 (seq
                  (seq
                   (ap results_fold_var $results_test)
                   (canon %init_peer_id% $results_test  #results_iter_canon)
                  )
                  (xor
                   (match #results_iter_canon.length 3
                    (null)
                   )
                   (next results_fold_var)
                  )
                 )
                 (never)
                )
                (canon %init_peer_id% $results_test  #results_result_canon)
               )
               (ap #results_result_canon results_gate)
              )
             )
            )
            (canon %init_peer_id% $results  #results_canon)
           )
           (xor
            (match #results_canon.$.[0].success false
             (ap #results_canon.$.[0].success and)
            )
            (seq
             (xor
              (match #results_canon.$.[0].result #results_canon.$.[1].result
               (ap true eq)
              )
              (ap false eq)
             )
             (ap eq and)
            )
           )
          )
          (xor
           (match and false
            (ap and and-0)
           )
           (seq
            (xor
             (match #results_canon.$.[0].result #results_canon.$.[2].result
              (ap true eq-0)
             )
             (ap false eq-0)
            )
            (ap eq-0 and-0)
           )
          )
         )
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (match and-0 true
              (ap true $b-0)
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (match :error:.$.error_code 10001
                (ap false $b-0)
               )
               (seq
                (seq
                 (ap :error: -else-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (ap -if-error- -if-else-error-)
                  )
                  (ap -else-error- -if-else-error-)
                 )
                )
                (fail -if-else-error-)
               )
              )
             )
            )
           )
          )
         )
        )
        (new $b-0_test
         (seq
          (seq
           (fold $b-0 b-0_fold_var
            (seq
             (seq
              (ap b-0_fold_var $b-0_test)
              (canon %init_peer_id% $b-0_test  #b-0_iter_canon)
             )
             (xor
              (match #b-0_iter_canon.length 1
               (null)
              )
              (next b-0_fold_var)
             )
            )
            (never)
           )
           (canon %init_peer_id% $b-0_test  #b-0_result_canon)
          )
          (ap #b-0_result_canon b-0_gate)
         )
        )
       )
       (new -if-else-error-
        (new -else-error-
         (new -if-error-
          (xor
           (match b-0_gate.$.[0] true
            (seq
             (new $results_test-0
              (seq
               (seq
                (fold $results results_fold_var-0
                 (seq
                  (seq
                   (ap results_fold_var-0 $results_test-0)
                   (canon %init_peer_id% $results_test-0  #results_iter_canon-0)
                  )
                  (xor
                   (match #results_iter_canon-0.length 1
                    (null)
                   )
                   (next results_fold_var-0)
                  )
                 )
                 (never)
                )
                (canon %init_peer_id% $results_test-0  #results_result_canon-0)
               )
               (ap #results_result_canon-0 results_gate-0)
              )
             )
             (new -if-else-error-
              (new -else-error-
               (new -if-error-
                (xor
                 (match results_gate-0.$.[0].result "QmWfVY9y3xjsixTgbd9AorQxH7VtMpzfx2HaWtsoUYecaX"
                  (seq
                   (call %init_peer_id% ("run-console" "print") ["test ran succesfully"])
                   (ap true $b)
                  )
                 )
                 (seq
                  (ap :error: -if-error-)
                  (xor
                   (match :error:.$.error_code 10001
                    (seq
                     (seq
                      (seq
                       (new $results_test-1
                        (seq
                         (seq
                          (fold $results results_fold_var-1
                           (seq
                            (seq
                             (ap results_fold_var-1 $results_test-1)
                             (canon %init_peer_id% $results_test-1  #results_iter_canon-1)
                            )
                            (xor
                             (match #results_iter_canon-1.length 1
                              (null)
                             )
                             (next results_fold_var-1)
                            )
                           )
                           (never)
                          )
                          (canon %init_peer_id% $results_test-1  #results_result_canon-1)
                         )
                         (ap #results_result_canon-1 results_gate-1)
                        )
                       )
                       (call %init_peer_id% ("run-console" "print") [results_gate-1.$.[0].result])
                      )
                      (call %init_peer_id% ("run-console" "print") ["peers returned an unexpected cid"])
                     )
                     (ap false $b)
                    )
                   )
                   (seq
                    (seq
                     (ap :error: -else-error-)
                     (xor
                      (match :error:.$.error_code 10001
                       (ap -if-error- -if-else-error-)
                      )
                      (ap -else-error- -if-else-error-)
                     )
                    )
                    (fail -if-else-error-)
                   )
                  )
                 )
                )
               )
              )
             )
            )
           )
           (seq
            (ap :error: -if-error-)
            (xor
             (match :error:.$.error_code 10001
              (seq
               (call %init_peer_id% ("run-console" "print") ["peers return unequal results"])
               (ap false $b)
              )
             )
             (seq
              (seq
               (ap :error: -else-error-)
               (xor
                (match :error:.$.error_code 10001
                 (ap -if-error- -if-else-error-)
                )
                (ap -else-error- -if-else-error-)
               )
              )
              (fail -if-else-error-)
             )
            )
           )
          )
         )
        )
       )
      )
      (new $b_test
       (seq
        (seq
         (fold $b b_fold_var
          (seq
           (seq
            (ap b_fold_var $b_test)
            (canon %init_peer_id% $b_test  #b_iter_canon)
           )
           (xor
            (match #b_iter_canon.length 1
             (null)
            )
            (next b_fold_var)
           )
          )
          (never)
         )
         (canon %init_peer_id% $b_test  #b_result_canon)
        )
        (ap #b_result_canon b_gate)
       )
      )
     )
     (call %init_peer_id% ("callbackSrv" "response") [b_gate.$.[0]])
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type UploadFileParams = [pinataJWTKey: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, pinataJWTKey: string, config?: {ttl?: number}];

export type UploadFileResult = Promise<boolean>;

export function uploadFile(...args: UploadFileParams): UploadFileResult {
    return callFunction$$(
        args,
        {
    "functionName": "uploadFile",
    "arrow": {
        "domain": {
            "fields": {
                "pinataJWTKey": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        uploadFile_script
    );
}
