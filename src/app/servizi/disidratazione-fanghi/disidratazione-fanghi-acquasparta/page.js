import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Acquasparta",
  canonical: links.servizi["disidratazione-fanghi"]["acquasparta"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Acquasparta",
  locationNames: { label: "Acquasparta", href: "acquasparta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
