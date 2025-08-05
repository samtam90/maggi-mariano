import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cremona",
    canonical: links.autospurgo["cremona"],
});
export default withBaseProps({ 
    title: "Autospurgo Cremona", 
    locationNames: {label: "Cremona", href: "cremona"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["cremona"],
        name: "Cremona",
    }),
});
