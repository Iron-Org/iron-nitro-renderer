import { IMessageEvent } from '../../../../../../core/communication/messages/IMessageEvent';
import { MessageEvent } from '../../../../../../core/communication/messages/MessageEvent';
import { MarketplaceCanMakeOfferResultParser } from '../../../parser/inventory/marketplace/MarketplaceCanMakeOfferResultParser';

export class MarketplaceSellItemEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceCanMakeOfferResultParser);
    }

    public getParser(): MarketplaceCanMakeOfferResultParser
    {
        return this.parser as MarketplaceCanMakeOfferResultParser;
    }
}
