import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Bastia Umbra",
    canonical: links.autospurgo["bastia-umbra"],
});
export default withBaseProps({ 
    title: "Autospurgo Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
