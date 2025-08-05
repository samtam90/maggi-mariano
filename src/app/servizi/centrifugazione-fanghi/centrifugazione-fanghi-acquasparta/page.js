import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Acquasparta",
  canonical: links.servizi["centrifugazione-fanghi"]["acquasparta"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Acquasparta",
  locationNames: { label: "Acquasparta", href: "acquasparta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
