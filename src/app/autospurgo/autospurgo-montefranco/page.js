import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montefranco",
    canonical: links.autospurgo["montefranco"],
});
export default withBaseProps({ 
    title: "Autospurgo Montefranco", 
    locationNames: {label: "Montefranco", href: "montefranco"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
