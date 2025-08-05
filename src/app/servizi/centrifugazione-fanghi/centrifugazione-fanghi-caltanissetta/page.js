import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Caltanissetta",
  canonical: links.servizi["centrifugazione-fanghi"]["caltanissetta"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Caltanissetta",
  locationNames: { label: "Caltanissetta", href: "caltanissetta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
