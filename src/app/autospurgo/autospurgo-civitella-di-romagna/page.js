import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Civitella di Romagna",
    canonical: links.autospurgo["civitella-di-romagna"],
});
export default withBaseProps({ 
    title: "Autospurgo Civitella di Romagna", 
    locationNames: {label: "Civitella di Romagna", href: "civitella-di-romagna"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
