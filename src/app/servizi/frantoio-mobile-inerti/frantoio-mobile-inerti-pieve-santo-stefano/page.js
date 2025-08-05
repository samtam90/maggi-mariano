import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pieve Santo Stefano",
  canonical: links.servizi["frantoio-mobile-inerti"]["pieve-santo-stefano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pieve Santo Stefano",
  locationNames: { label: "Pieve Santo Stefano", href: "pieve-santo-stefano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
