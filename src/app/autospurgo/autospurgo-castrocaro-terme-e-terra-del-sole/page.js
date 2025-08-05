import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castrocaro Terme e Terra del Sole",
    canonical: links.autospurgo["castrocaro-terme-e-terra-del-sole"],
});
export default withBaseProps({ 
    title: "Autospurgo Castrocaro Terme e Terra del Sole", 
    locationNames: {label: "Castrocaro Terme e Terra del Sole", href: "castrocaro-terme-e-terra-del-sole"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
