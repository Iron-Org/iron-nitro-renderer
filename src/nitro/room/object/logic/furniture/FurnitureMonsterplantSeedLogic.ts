import { ContextMenuEnum } from '../../../../ui';
import { RoomObjectWidgetRequestEvent } from '../../../events/RoomObjectWidgetRequestEvent';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';

export class FurnitureMonsterplantSeedLogic extends FurnitureMultiStateLogic
{
    public getEventTypes(): string[]
    {
        const types = [ RoomObjectWidgetRequestEvent.MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG ];

        return this.mergeTypes(super.getEventTypes(), types);
    }

    public useObject(): void
    {
        if(!this.eventDispatcher || !this.object) return;

        this.eventDispatcher.dispatchEvent(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG, this.object));
    }

    public get contextMenu(): string
    {
        return ContextMenuEnum.MONSTERPLANT_SEED;
    }
}