import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Rimini",
    canonical: links.autospurgo["rimini"],
});
export default withBaseProps({ 
    title: "Autospurgo Rimini", 
    locationNames: {label: "Rimini", href: "rimini"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["rimini"],
        name: "Rimini",
    }),
});
