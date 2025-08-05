import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Siracusa",
    canonical: links.autospurgo["siracusa"],
});
export default withBaseProps({ 
    title: "Autospurgo Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siracusa"],
        name: "Siracusa",
    }),
});
