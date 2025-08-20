import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Barberino di Mugello",
    canonical: links.autospurgo["barberino-di-mugello"],
});
export default withBaseProps({ 
    title: "Autospurgo Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
