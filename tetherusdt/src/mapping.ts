import {
  Issue as IssueEvent,
  Redeem as RedeemEvent,
  Deprecate as DeprecateEvent,
  Params as ParamsEvent,
  DestroyedBlackFunds as DestroyedBlackFundsEvent,
  AddedBlackList as AddedBlackListEvent,
  RemovedBlackList as RemovedBlackListEvent,
  Approval as ApprovalEvent,
  Transfer as TransferEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent
} from "../generated/ContractUSDT/ContractUSDT"
import {
  Issue,
  Redeem,
  Deprecate,
  Params,
  DestroyedBlackFunds,
  AddedBlackList,
  RemovedBlackList,
  Approval,
  Transfer,
  Pause,
  Unpause
} from "../generated/schema"

export function handleIssue(event: IssueEvent): void {
  let entity = new Issue(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount
  entity.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new Redeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount
  entity.save()
}

export function handleDeprecate(event: DeprecateEvent): void {
  let entity = new Deprecate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newAddress = event.params.newAddress
  entity.save()
}

export function handleParams(event: ParamsEvent): void {
  let entity = new Params(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.feeBasisPoints = event.params.feeBasisPoints
  entity.maxFee = event.params.maxFee
  entity.save()
}

export function handleDestroyedBlackFunds(
  event: DestroyedBlackFundsEvent
): void {
  let entity = new DestroyedBlackFunds(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._blackListedUser = event.params._blackListedUser
  entity._balance = event.params._balance
  entity.save()
}

export function handleAddedBlackList(event: AddedBlackListEvent): void {
  let entity = new AddedBlackList(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._user = event.params._user
  entity.save()
}

export function handleRemovedBlackList(event: RemovedBlackListEvent): void {
  let entity = new RemovedBlackList(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._user = event.params._user
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}
