import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castelnuovo Berardenga",
    canonical: links.autospurgo["castelnuovo-berardenga"],
});
export default withBaseProps({ 
    title: "Autospurgo Castelnuovo Berardenga", 
    locationNames: {label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
