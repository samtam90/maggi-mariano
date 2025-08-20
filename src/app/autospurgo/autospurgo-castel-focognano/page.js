import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel Focognano",
    canonical: links.autospurgo["castel-focognano"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
