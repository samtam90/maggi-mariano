import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Verona",
    canonical: links.autospurgo["verona"],
});
export default withBaseProps({ 
    title: "Autospurgo Verona", 
    locationNames: {label: "Verona", href: "verona"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["verona"],
        name: "Verona",
    }),
});
