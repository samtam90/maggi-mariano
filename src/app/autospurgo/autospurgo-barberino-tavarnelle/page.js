import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Barberino Tavarnelle",
    canonical: links.autospurgo["barberino-tavarnelle"],
});
export default withBaseProps({ 
    title: "Autospurgo Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
