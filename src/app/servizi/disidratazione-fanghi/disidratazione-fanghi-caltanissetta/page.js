import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Caltanissetta",
  canonical: links.servizi["disidratazione-fanghi"]["caltanissetta"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Caltanissetta",
  locationNames: { label: "Caltanissetta", href: "caltanissetta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
