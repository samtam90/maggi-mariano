import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Lecco",
    canonical: links.autospurgo["lecco"],
});
export default withBaseProps({ 
    title: "Autospurgo Lecco", 
    locationNames: {label: "Lecco", href: "lecco"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["lecco"],
        name: "Lecco",
    }),
});
