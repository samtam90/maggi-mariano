import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Subbiano",
    canonical: links.autospurgo["subbiano"],
});
export default withBaseProps({ 
    title: "Autospurgo Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
