import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Modigliana",
    canonical: links.autospurgo["modigliana"],
});
export default withBaseProps({ 
    title: "Autospurgo Modigliana", 
    locationNames: {label: "Modigliana", href: "modigliana"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
