#[no_mangle]
pub extern "C" fn factorial(n: u32) -> u32 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
    println!("Completed");
}